// important imports:
import * as turf from "@turf/turf";
import { useState, useRef, useCallback } from "react";

// Files:
import { getRanking } from "../../utils/getRanking.js";
import { getName } from "../../utils/getName.js";

// json:
import geojson from "../../json/geojson.json";

// Components:
import Map, { Source, Layer } from "react-map-gl";
import Modal from "../../Components/Modal/Modal.jsx";
import Drawerbar from "../../Components/Drawerbar/Drawerbar.jsx";

// Icons:
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ReplayIcon from "@mui/icons-material/Replay";

function MapScreen() {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [haveInfo, setHaveInfo] = useState(false);
  const [searchGeojson, setSearchGeojson] = useState(geojson);

  const [search, setSearch] = useState("");
  const [biggerFrequency, setBiggerFrequency] = useState(null);

  const onHover = useCallback((event) => {
    const county = event.features[0] ? event.features[0].properties.estado : "";
    const codearea = event.features[0]
      ? event.features[0].properties.codarea
      : "";
    const acronym = event.features[0] ? event.features[0].properties.sigla : "";
    const frequencia = event.features[0]
      ? event.features[0].properties.frequencia || null
      : null;

    if (!!county != "") {
      setHaveInfo(true);
    } else {
      setHaveInfo(false);
    }

    setHoverInfo({
      county: county,
      codearea: codearea,
      acronym: acronym,
      frequencia: frequencia,
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const [viewState, setViewState] = useState({
    longitude: -57,
    latitude: -15,
    zoom: 3.8,
  });

  const onMove = useCallback(({ viewState }) => {
    setViewState({
      longitude: viewState.longitude,
      latitude: viewState.latitude,
      zoom: viewState.zoom,
    });
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.county) || "";

  const layerStyle = {
    id: "data",
    type: "fill",
    paint: {
      "fill-outline-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty],
        "#64748b",
        "#334155",
      ],
      "fill-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : 0],
        "#475569",
        "#334155",
      ],
      "fill-opacity": [
        "interpolate",
        ["linear"],
        ["get", searchGeojson ? "frequencia" : ""],
        0,
        0,
        biggerFrequency || 1,
        1,
      ],
    },
  };

  const mapRef = useRef();
  const GEOFENCE = turf.circle([-52.4, -16.3], 3000, { units: "kilometers" });

  const onSelectCity = useCallback(({ longitude, latitude }, duration) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: duration,
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const [clickedCounty, setClickedCounty] = useState(false);
  const [clickedCodeArea, setClickedCodeArea] = useState(false);
  const [ranking, setRanking] = useState(null);
  const [openSearchbar, setOpenSearchbar] = useState(false);

  const [sex, setSex] = useState(false);
  const [dec, setDec] = useState(false);
  const handleFilter = (sexFiltered, decadeFiltered) => {
    setSex(sexFiltered);
    setDec(decadeFiltered);
  };

  const [mouseUp, setMouseUp] = useState(true);
  const handleMouseDown = () => {
    setMouseUp(false);
  };
  const handleMouseUp = () => {
    setMouseUp(true);
  };

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <Drawerbar onFilter={handleFilter} />

      <div
        className="w-full h-screen bg-slate-300 overflow-hidden relative"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <Map
          // Estilos:
          mapStyle="mapbox://styles/camarg0vs/clm1c13c401ub01p7g8sngg8x"
          mapboxAccessToken="pk.eyJ1IjoiY2FtYXJnMHZzIiwiYSI6ImNsbGtyeHkwNzIzYXYzcW8xYTk4dXplOTkifQ.AeclKAsX4UhZf6xCfZgwPg"
          style={{ width: "100%", height: "100vh" }}
          // Dados:
          {...viewState}
          interactiveLayerIds={["data"]}
          ref={mapRef}
          // Definições:
          maxZoom={5.6}
          minZoom={2}
          doubleClickZoom={false}
          maxPitch={45}
          minPitch={0}
          cursor={haveInfo ? "pointer" : "default"}
          // maxBounds={bounds}
          // Eventos:
          onMouseMove={onHover}
          onMove={onMove}
          // dois cliques para reiniciar a visão do mapa:
          onDblClick={() => {
            mapRef.current?.flyTo({
              center: [-57, -15],
              zoom: 3.8,
              pitch: 30,
              bearing: 0,
              duration: 1000,
            });
          }}
          onClick={() => {
            if (!!hoverInfo.county != "") {
              onSelectCity(
                {
                  longitude: hoverInfo.longitude,
                  latitude: hoverInfo.latitude,
                },
                1000
              );
              getRanking(
                hoverInfo.codearea,
                dec && dec != 1920 ? dec : false,
                sex && sex != "N/A" ? sex : false
              ).then((res) => {
                setClickedCounty(selectedCounty);
                setClickedCodeArea(hoverInfo.codearea);
                setRanking(res[0].res);
                setModalOpen(true);
              });
            } else {
              if (
                !turf.booleanPointInPolygon(
                  [hoverInfo.longitude, hoverInfo.latitude, hoverInfo.zoom],
                  GEOFENCE
                )
              ) {
                onSelectCity({ longitude: -47, latitude: -15 }, 1000);
              }
            }
          }}>
          <Source type="geojson" data={searchGeojson}>
            <Layer {...layerStyle} />
          </Source>
          {!!hoverInfo && !!hoverInfo.county && mouseUp && !modalOpen && (
            <div
              className="tooltip bg-slate-800 rounded-sm text-white border-white border-[1px] absolute p-3 pointer-events-none -translate-x-1/2"
              style={{
                left: mousePosition.x,
                top: mousePosition.y - (biggerFrequency ? 80 : 60),
              }}>
              <div className="">{hoverInfo.county}</div>
              {biggerFrequency ? (
                <div>Frequencia: {hoverInfo.frequencia || 0}</div>
              ) : null}
            </div>
          )}
        </Map>

        <div
          className={`fixed flex top-0 md:right-0 sm:left-0 md:left-auto min-h-[34px] duration-200 ${
            openSearchbar ? "sm:w-[100vw]" : "sm:w-[0vw]"
          } md:w-fit`}>
          <button
            className={`group hover:pl-3 hover:pr-1 flex justify-center items-center min-w-[34px] bg-slate-800 text-white border sm:border-b-0 sm:border-l-0 md:border-l md:border-b border-t-0 md:border-r-0 ${
              openSearchbar ? "sm:border-0" : ""
            } hover:bg-slate-700 duration-75`}
            onClick={() => {
              setOpenSearchbar(!openSearchbar);
            }}>
            <h1 className="hidden md:group-hover:flex">
              {openSearchbar ? "Fechar barra de pesquisa" : "Pesquisar um nome"}
            </h1>
            {openSearchbar ? (
              <ArrowRightIcon className="sm:rotate-180 md:rotate-0" />
            ) : (
              <ArrowLeftIcon className="sm:rotate-180 md:rotate-0" />
            )}
          </button>
          <div
            className={`${
              openSearchbar ? "lg:w-[26rem]" : "w-0"
            } flex overflow-hidden duration-[.6s]`}>
            <input
              className="w-[24rem] p-2 hover:pl-3 focus:pl-4 outline-none border border-slate-200 duration-75"
              type="text"
              name="occurrence"
              id="occurrence-input"
              placeholder="Pesquise um nome..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyUp={(e) => {
                if (search === "") {
                  console.log("oi");
                } else if (e.key === "Enter") {
                  setSearchGeojson({
                    type: "FeatureCollection",
                    features: [],
                  });
                  async function updateGeoJson() {
                    const res = await getName(search, true);
                    let newGeojson = {
                      type: "FeatureCollection",
                      features: [],
                    };
                    let major = null;
                    const map = {};

                    for (const county of res) {
                      map[parseInt(county.localidade)] = await county.res[0]
                        .frequencia;
                      if (major == null || major < county.res[0].frequencia) {
                        major = await county.res[0].frequencia;
                      }
                    }

                    for (let i = 0; i < geojson.features.length; i++) {
                      newGeojson.features[i] = await geojson.features[i];
                      newGeojson.features[i].properties.frequencia =
                        (await map[
                          newGeojson.features[i].properties.codarea
                        ]) || 0;
                    }
                    setBiggerFrequency(major || 1);
                    setSearchGeojson(newGeojson);
                  }
                  updateGeoJson();
                }
              }}
            />
            <button
              className="p-2 bg-white rounded-sm border-l group hover:bg-slate-50 duration-75"
              onClick={() => {
                if (search === "") {
                  console.log("oi");
                } else {
                  setSearchGeojson({
                    type: "FeatureCollection",
                    features: [],
                  });
                  async function updateGeoJson() {
                    const res = await getName(search, true);
                    let newGeojson = {
                      type: "FeatureCollection",
                      features: [],
                    };
                    let major = null;
                    const map = {};

                    for (const county of res) {
                      map[parseInt(county.localidade)] = await county.res[0]
                        .frequencia;
                      if (major == null || major < county.res[0].frequencia) {
                        major = await county.res[0].frequencia;
                      }
                    }

                    for (let i = 0; i < geojson.features.length; i++) {
                      newGeojson.features[i] = await geojson.features[i];
                      newGeojson.features[i].properties.frequencia =
                        (await map[
                          newGeojson.features[i].properties.codarea
                        ]) || 0;
                    }
                    setBiggerFrequency(major || 1);
                    setSearchGeojson(newGeojson);
                  }
                  updateGeoJson();
                }
              }}>
              <div className="group-hover:scale-125 duration-75">
                <SearchIcon />
              </div>
            </button>
          </div>
        </div>

        <div className="fixed w-[34px] h-[34px] bottom-0 right-0 bg-slate-800 m-5 text-white border justify-center items-center sm:hidden md:flex hover:bg-slate-700 duration-75">
          <button
            onClick={() => {
              mapRef.current?.flyTo({
                center: [-57, -15],
                zoom: 3.8,
                pitch: 30,
                bearing: 0,
                duration: 1000,
              });
            }}>
            <ReplayIcon />
          </button>
        </div>

        <Modal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          countyName={clickedCounty}
          codeArea={clickedCodeArea}
          ranking={ranking}
          acronym={hoverInfo ? hoverInfo.acronym : null}
        />
      </div>
    </>
  );
}

export default MapScreen;
