import { useEffect, useState } from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";

// Components:
import CardImage from "../../Components/CardImage/CardImage.jsx";
import UnderlineTx from "../../Components/Basic/UnderlineTx.jsx";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { Link, useParams } from "react-router-dom";

import regions from "../../json/state.json";
import Plot from "react-plotly.js";

import { getRanking } from "../../utils/getRanking.js";
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import "../styles/moreinfo.css";
import { getName } from "../../utils/getName.js";

function MoreInfo() {
  const { acronym } = useParams();
  const [width, height] = useWindowSize();
  const [selectedState, setSelectedState] = useState("BR");

  useEffect(() => {
    //console.log(selectedState);
  }, [selectedState]);

  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    setRanking(null);

    getRanking(regions[acronym].codarea, null, null).then((res) => {
      let data = {
        x: [],
        y: [],
      };
      res[0].res.map((item) => {
        data.x.push(item.nome);
        data.y.push(item.frequencia);
      });

      setRanking(data);
      //console.log(data);
    });
  }, [acronym]);

  const [searchRegion, setSearchRegion] = useState(false);
  useEffect(() => {
    if (!searchRegion) setSearchRegion(false);
    //console.log(searchRegion);
  }, [searchRegion]);

  const [sex, setSex] = useState(false);
  const [search, setSearch] = useState(false);
  const [groupBy, setGroupBy] = useState(false);

  const [details, setDetails] = useState(false);

  const [detailsStyle, setDetailsStyle] = useState("lines");

  useEffect(() => {
    if (search) {
      setDetails(null);

      getName(search, groupBy, sex, regions[acronym].codarea).then((res) => {
        let data = {
          x: [],
          y: [],
        };
        if (groupBy) {
          res.map((item) => {
            const county = Object.keys(regions).find(
              (region) => regions[region].codarea == item.localidade
            );

            data.x.push(regions[county].nome);
            data.y.push(item.res[0].frequencia);
          });
        } else {
          res[0].res.map((item) => {
            data.x.push(item.periodo);
            data.y.push(item.frequencia);
          });
        }
        setDetails(data);
      });
    }
  }, [sex, search, groupBy, acronym]);

  return (
    <>
      <Header />
      <div className="flex md:flex-col sm:scale-90 sm:flex-wrap lg:flex-row justify-around pt-28">
        <div className="border-[1px] rounded-md group sm:w-screen md:w-auto lg:min-w-[50vw] sm:mb-10 lg:mb-0">
          <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50 rounded-t-md">
            <h1 className="text-2xl">Região Selecionado</h1>
          </div>
          <div className="flex m-6 items-center">
            <div className="flex rounded-sm overflow-hidden sm:hidden md:block">
              <img
                src={
                  acronym == "BR"
                    ? `https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima`
                    : `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${acronym}?formato=image/svg+xml&qualidade=maxima`
                }
                alt="state"
                className="w-[400px] h-[400px] border-[1px] p-5 rounded-lg"
              />
            </div>
            <div className="sm:mx-auto sm:w-full md:w-1/2 md:pl-5 sm:pl-0 justify-start">
              <div className="border-b-[1px] py-5">
                <h1 className="sm:text-2xl md:text-4xl flex items-center gap-1">
                  Nome: <UnderlineTx text={`${regions[acronym].nome}`} />{" "}
                  <img
                    src={
                      acronym == "BR"
                        ? `https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima`
                        : `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${acronym}?formato=image/svg+xml&qualidade=maxima`
                    }
                    alt="state"
                    className="w-[24px] h-[24px] sm:block md:hidden ml-2"
                  />
                </h1>
                <h1 className="sm:text-base md:text-2xl">Sigla: {acronym}</h1>
              </div>
              <div className="border-b-[1px] py-5">
                <h1 className="">Tamanho: {regions[acronym].tamanho}</h1>
                <h1 className="">População: {regions[acronym].habitantes}</h1>
                <h1 className="">Densidade {regions[acronym].densidade}</h1>
              </div>
              <div className="py-5">
                <h1 className="">PIB: {regions[acronym].pib}</h1>
                <h1 className="">Região: {regions[acronym].região}</h1>
                <h1 className="">Capital: {regions[acronym].capital}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[1px] rounded-md group sm:w-screen md:w-auto lg:max-w-[40vw]">
          <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50 rounded-t-md">
            <h1 className="text-2xl">Outras regiões</h1>
          </div>
          <div className="grid p-5">
            <input
              type="text"
              name="stateFinder"
              id="stateFinder"
              placeholder="Procure um estado brasileiro"
              className="p-[5px] pl-3 hover:pl-4 focus:pl-5 focus:border-slate-950 duration-75 border outline-none rounded-lg"
              onChange={(e) => {
                setSearchRegion(e.target.value);
              }}
            />
          </div>
          <div className="h-80 overflow-x-auto p-5 mb-5 overflow border rounded-lg mx-5">
            <div className="flex flex-wrap gap-6 justify-center">
              {Object.keys(regions).map((region) => (
                <Link
                  key={`key-region-${regions[region].sigla}`}
                  to={`/MoreInfo/${regions[region].sigla}`}>
                  <CardImage
                    key={`region-${regions[region].sigla}`}
                    title={regions[region].nome}
                    image={
                      regions[region].sigla == "BR"
                        ? "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
                        : `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${regions[region].sigla}?formato=image/svg+xml&qualidade=maxima`
                    }
                    isVisible={
                      searchRegion
                        ? regions[region].nome
                            .toLowerCase()
                            .includes(searchRegion.toLowerCase())
                        : true
                    }
                    onClick={() => {
                      setSelectedState(regions[region].sigla);
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-28">
        <div className="flex flex-wrap gap-8 items-center justify-around pt-14 px-[8vh]">
          <div className="sm:mx-4 md:mx-0 shadow-lg mb-14 rounded-md">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-white rounded-t-md">
              <h1 className="text-2xl">Ranking de Nomes</h1>
            </div>
            <Plot
              data={
                ranking && [
                  {
                    type: "bar",
                    x: ranking.x,
                    y: ranking.y,
                    marker: { color: "#334155", borderColor: "#020617" },
                  },
                ]
              }
              layout={{
                width: width * 0.9,
                height: width > 1280 ? height * 0.75 : width * 0.5,
                title: `${regions[acronym].nome}`,
              }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
          <div className="sm:min-w-[80vw] md:min-w-[25rem] h-fit border shadow-lg flex flex-col rounded-md">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-white rounded-t-md">
              <h1 className="text-2xl">Filtros</h1>
            </div>
            <input
              type="text"
              name="nameFinder"
              id="nameFinder"
              placeholder="Digite um nome"
              className="p-5 text-lg pl-3 hover:pl-4 focus:pl-5 focus:border-slate-400 duration-75 border-b outline-none"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="flex center items-center flex-col border-b sm:py-3 md:py-5">
              <h1 className="font-bold">Gênero</h1>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="N/A"
                onChange={(e) => setSex(e.target.value)}>
                <FormControlLabel
                  value="N/A"
                  control={<Radio />}
                  label="Ambos"
                  disabled={groupBy}
                />
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="Feminino"
                  disabled={groupBy}
                />
                <FormControlLabel
                  value="M"
                  control={<Radio />}
                  label="Masculino"
                  disabled={groupBy}
                />
              </RadioGroup>
            </div>
            <div className="flex justify-center items-center flex-row border-b sm:py-0 md:py-5">
              <Checkbox id="filterByIF" name="filterByIF" 
                onChange={(e) => {
                  setGroupBy(e.target.checked);
                }}
              />
              <div className="flex justify-center items-center flex-col">
                <p
                  className={`font-bold mb-2 ${
                    groupBy ? "slide-in" : "slide-out"
                  }`}>
                  Filtrar frequência por UF
                </p>
                {/* {groupBy && ( */}
                <div className="text-center">
                  <p
                    className={`text-sm ${
                      groupBy ? "p-slide-in" : "p-slide-out"
                    }`}>
                    Implica em desativar outros filtros
                    <br />
                    (genero e/ou localidade)
                  </p>
                </div>
                {/* )} */}
              </div>
            </div>
            <div className="flex center items-center flex-col sm:py-3 md:py-5">
              <h1 className="font-bold">Estilo do gráfico</h1>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="lines"
                onChange={(e) => setDetailsStyle(e.target.value)}>
                <FormControlLabel
                  value="lines"
                  control={<Radio />}
                  label="Linhas"
                />
                <FormControlLabel
                  value="bar"
                  control={<Radio />}
                  label="Barras"
                />
              </RadioGroup>
            </div>
          </div>

          <div className="sm:mx-4 md:mx-0 shadow-lg rounded-md">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-white rounded-t-md">
              <h1 className="text-2xl">Detalhes</h1>
            </div>
            <Plot
              data={
                details && details.x && details.y ? [
                  {
                    type: detailsStyle,
                    x: details.x,
                    y: details.y,
                    marker: { color: "#334155", borderColor: "#020617" },
                  },
                ] : []
              }
              
              layout={{
                width:
                  width > 1280
                    ? width * 0.65
                    : width > 920
                    ? width * 0.8
                    : width * 0.9,
                height: width > 1280 ? height * 0.66 : width * 0.5,
                title: groupBy
                  ? "Estados"
                  : search
                  ? `Frequência do nome ${search.toUpperCase()} em ${
                      regions[acronym].nome
                    }`
                  : "",
              }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MoreInfo;
