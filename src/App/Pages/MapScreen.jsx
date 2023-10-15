// important imports:
import * as turf from "@turf/turf";
import { useState, useRef, useCallback, useEffect } from "react";

// Files:
import { getRanking } from "../../utils/getRanking.js";
import { getName } from "../../utils/getName.js";

// json:
import json from "../../json/geojson.json";

// Components:
import Map, { Source, Layer } from "react-map-gl";
import Modal from "../../Components/Modal/Modal.jsx";
import Drawerbar from "../../Components/Drawerbar/Drawerbar.jsx";
import { Box, TextField } from "@mui/material";

// Icons:
// import FilterAltIcon from "@mui/icons-material/FilterAlt";

function MapScreen() {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [haveInfo, setHaveInfo] = useState(false);
  const [geojson, setGeojson] = useState(json);

  const [search, setSearch] = useState("");
  const [biggerFrequency, setBiggerFrequency] = useState(null);
  useEffect(() => {
    if (search) {
      let newGeojson = json;
      let major = null;
      // setBiggerFrequency(null);

      getName(search, true).then((res) => {
        const map = {};
        if (res.length) {
          for (const county of res) {
            map[parseInt(county.localidade)] = county.res[0].frequencia;
            if (major == null || major < county.res[0].frequencia) {
              major = county.res[0].frequencia;
            }
          }
        }

        for (let i = 0; i < newGeojson.features.length; i++) {
          newGeojson.features[i].properties.frequencia =
            ((map[newGeojson.features[i].properties.codarea])/major) || 0;
        }

        setBiggerFrequency(major);
        setGeojson(
        //   {
        //   "type": "Feature",
        //   "properties": { "frequencia": 0.1},
        //   "geometry": {
        //     "type": "Polygon",
        //     "coordinates": [
        //       [
        //         [-51.4253, -13.7350],
        //         [-51.4253, -14.7350],
        //         [-50.4253, -14.7350],
        //         [-50.4253, -13.7350],
        //         [-51.4253, -13.7350]
        //       ]
        //     ]
        //   }
        // }
        newGeojson
        );
      });
    } else {
      setGeojson(json);
    }
  }, [search]);

  const onHover = useCallback((event) => {
    const county = event.features[0] ? event.features[0].properties.estado : "";
    const codearea = event.features[0]
      ? event.features[0].properties.codarea
      : "";
    const acronym = event.features[0] ? event.features[0].properties.sigla : "";

    if (!!county != "") {
      setHaveInfo(true);
    } else {
      setHaveInfo(false);
    }

    setHoverInfo({
      county: county,
      codearea: codearea,
      acronym: acronym,
      // frequencia: frequencia,
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
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        "#475569",
        "#334155",
      ],
      "fill-opacity": [
        "interpolate",
        ["linear"],
        ["get", search ? "frequencia" : ""], // Propriedade de ocorrência do estado
        0, 0, // Mapear 0 de ocorrência para 0 de opacidade
        1, 1, // Mapear 1000 de ocorrência para 1 de opacidade (totalmente opaco)
      ],
    },
  };
  console.log(layerStyle.paint["fill-opacity"], biggerFrequency, geojson)

  const mapRef = useRef();
  const GEOFENCE = turf.circle([-52.4, -16.3], 3000, { units: "kilometers" });

  //impedindo que o brasil saia da tela e mantendo uma boa proporção/margem conforme o zoom:
  // const bounds = [
  //   [-80, 30], // Southwest coordinates
  //   [-30, -30], // Northeast coordinates
  // ];

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

  //filter handler
  const [sex, setSex] = useState(false);
  const [dec, setDec] = useState(false);
  const handleFilter = (sexFiltered, decadeFiltered) => {
    setSex(sexFiltered);
    setDec(decadeFiltered);
  };

  return (
    <>
      <Drawerbar onFilter={handleFilter} />

      <div className="w-full h-screen bg-slate-300 overflow-hidden relative">
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
          minZoom={3}
          doubleClickZoom={false}
          maxPitch={45}
          minPitch={0}
          cursor={haveInfo ? "pointer" : "default"}
          // maxBounds={bounds}
          // Eventos:
          onMouseMove={onHover}
          onMove={onMove}
          onClick={() => {
            // console.log(geojson);
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
          }}
        >
          <Source type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
        </Map>

        <Box className="absolute top-3 right-3 bg-white flex items-center justify-center rounded-sm p-2 w-1/4 h-1/20">
          <TextField
            id="filled-basic"
            label="Pesquise a ocorrência de um nome específico"
            variant="outlined"
            size="small"
            className="w-full h-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

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
