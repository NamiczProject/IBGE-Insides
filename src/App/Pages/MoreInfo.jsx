import { useEffect, useState } from "react";

// Components:
import CardImage from "../../Components/CardImage/CardImage.jsx";
import UnderlineTx from "../../Components/Basic/UnderlineTx.jsx";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";

function MoreInfo() {
  const { acronym } = useParams();
  console.log(acronym);
  const [selectedState, setSelectedState] = useState("BR");

  useEffect(() => {
    console.log(selectedState);
  }, [selectedState]);

  return (
    <>
      <Header />
      <div className="flex md:flex-col sm:scale-90 sm:flex-wrap lg:flex-row justify-around border-b py-28">
        <div className="border-[1px] rounded-sm group sm:w-screen md:w-auto sm:mb-10 lg:mb-0">
          <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50">
            <h1 className="text-2xl">Estado Selecionado</h1>
          </div>
          <div className="flex m-6 items-center">
            <div className="flex rounded-sm overflow-hidden sm:hidden md:block">
              <img
                src="https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
                alt="state"
                className="w-[400px] h-[400px] border-[1px] p-5"
              />
            </div>
            <div className="sm:mx-auto md:pl-10">
              <div className="border-b-[1px] py-5">
                <h1 className="sm:text-2xl md:text-4xl flex items-center">
                  Nome: <UnderlineTx text={"Brasil"} />{" "}
                  <img
                    src="https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
                    alt="state"
                    className="w-[24px] h-[24px] sm:block md:hidden ml-2"
                  />
                </h1>
                <h1 className="sm:text-base md:text-2xl">Sigla: BR</h1>
              </div>
              <div className="border-b-[1px] py-5">
                <h1 className="">Tamanho: 8.515.767,049 km²</h1>
                <h1 className="">População: 211.755.692 habitantes</h1>
                <h1 className="">Densidade demográfica: 25,07 hab/km²</h1>
              </div>
              <div className="py-5">
                <h1 className="">PIB: R$ 7,4 trilhões</h1>
                <h1 className="">Região: América do Sul</h1>
                <h1 className="">Capital: Brasília</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[1px] rounded-sm group sm:w-screen md:w-auto lg:max-w-[40vw]">
          <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50">
            <h1 className="text-2xl">Outros estados</h1>
          </div>
          <div className="grid p-5">
            <input
              type="text"
              name="stateFinder"
              id="stateFinder"
              placeholder="Procure um estado brasileiro..."
              className="p-[5px] pl-3 hover:pl-4 focus:pl-5 focus:border-slate-950 duration-75 border outline-none"
              onInput={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="h-80 overflow-x-auto p-5 mb-5 overflow border rounded-sm mx-5">
            <div className="flex flex-wrap gap-6 justify-center">
              <CardImage
                title={"Acre"}
                goTo={"./MoreInfo/AC"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AC?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("AC");
                }}
              />
              <CardImage
                title={"Alagoas"}
                goTo={"./MoreInfo/AL"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AL?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("AL");
                }}
              />
              <CardImage
                title={"Amapá"}
                goTo={"./MoreInfo/AP"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AP?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("AP");
                }}
              />
              <CardImage
                title={"Amazonas"}
                goTo={"./MoreInfo/AM"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AM?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("AM");
                }}
              />
              <CardImage
                title={"Bahia"}
                goTo={"./MoreInfo/BA"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/BA?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("BA");
                }}
              />
              <CardImage
                title={"Ceará"}
                goTo={"./MoreInfo/CE"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/CE?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("CE");
                }}
              />
              <CardImage
                title={"Distrito Federal"}
                goTo={"./MoreInfo/DF"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/DF?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("DF");
                }}
              />
              <CardImage
                title={"Espírito Santo"}
                goTo={"./MoreInfo/ES"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/ES?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("ES");
                }}
              />
              <CardImage
                title={"Goiás"}
                goTo={"./MoreInfo/GO"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/GO?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("GO");
                }}
              />
              <CardImage
                title={"Maranhão"}
                goTo={"./MoreInfo/MA"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MA?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("MA");
                }}
              />
              <CardImage
                title={"Mato Grosso"}
                goTo={"./MoreInfo/MT"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MT?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("MT");
                }}
              />
              <CardImage
                title={"Mato Grosso do Sul"}
                goTo={"./MoreInfo/MS"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MS?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("MS");
                }}
              />
              <CardImage
                title={"Minas Gerais"}
                goTo={"./MoreInfo/MG"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MG?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("MG");
                }}
              />
              <CardImage
                title={"Pará"}
                goTo={"./MoreInfo/PA"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PA?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("PA");
                }}
              />
              <CardImage
                title={"Paraíba"}
                goTo={"./MoreInfo/PB"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PB?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("PB");
                }}
              />
              <CardImage
                title={"Paraná"}
                goTo={"./MoreInfo/PR"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PR?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("PR");
                }}
              />
              <CardImage
                title={"Pernambuco"}
                goTo={"./MoreInfo/PE"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PE?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("PE");
                }}
              />
              <CardImage
                title={"Piauí"}
                goTo={"./MoreInfo/PI"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PI?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("PI");
                }}
              />
              <CardImage
                title={"Rio de Janeiro"}
                goTo={"./MoreInfo/RJ"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RJ?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("RJ");
                }}
              />

              <CardImage
                title={"Rio Grande do Norte"}
                goTo={"./MoreInfo/RN"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RN?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("RN");
                }}
              />
              <CardImage
                title={"Rio Grande do Sul"}
                goTo={"./MoreInfo/RS"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RS?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("RS");
                }}
              />
              <CardImage
                title={"Rondônia"}
                goTo={"./MoreInfo/RO"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RO?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("RO");
                }}
              />
              <CardImage
                title={"Roraima"}
                goTo={"./MoreInfo/RR"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RR?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("RR");
                }}
              />
              <CardImage
                title={"Santa Catarina"}
                goTo={"./MoreInfo/SC"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/SC?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("SC");
                }}
              />
              <CardImage
                title={"São Paulo"}
                goTo={"./MoreInfo/SP"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/SP?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("SP");
                }}
              />
              <CardImage
                title={"Sergipe"}
                goTo={"./MoreInfo/SE"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/SE?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("SE");
                }}
              />
              <CardImage
                title={"Tocantins"}
                goTo={"./MoreInfo/TO"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/TO?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("TO");
                }}
              />
              <CardImage
                title={"Brasil"}
                goTo={"./MoreInfo/BR"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
                }
                onClick={() => {
                  setSelectedState("BR");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-28">
        <div className="text-center mt-10">
          <h1 className="text-3xl">
            <UnderlineTx text={"Analisando dados"} />
          </h1>
        </div>

        <div className="flex flex-wrap gap-8 justify-around pt-14">
          <div className="sm:min-w-[80vw] md:min-w-[25rem] min-h-[30rem] border shadow-lg">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-white">
              <h1 className="text-2xl">Filtro</h1>
            </div>
          </div>
          <div className="sm:mx-4 md:mx-0 shadow-lg">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-white">
              <h1 className="text-2xl">Gráfico com Filtro</h1>
            </div>
            <img
              src="https://placehold.co/1000x600"
              alt="Gráfico"
              className=""
            />
          </div>
          <div className="sm:mx-4 md:mx-0 shadow-lg">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-white">
              <h1 className="text-2xl">Ranking de Nomes</h1>
            </div>
            <img
              src="https://placehold.co/1000x600"
              alt="Gráfico"
              className=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MoreInfo;
