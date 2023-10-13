// Dependencies:
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Slide from "@mui/material/Slide";

// Components:
import Header from "../../Components/Header/Header";
import UnderlineTx from "../../Components/Basic/UnderlineTx";
import GoDownBtn from "../../Components/Basic/goDownBtn";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";

// Images:
import namiczImg from "../../assets/namicz-Icon.svg";
import brasilCardImg from "../../assets/brasil-card-image.png";
import rankingCardImg from "../../assets/ranking-card-image.png";
import searchCardImg from "../../assets/search-card-image.png";

// Icons:
import SearchIcon from "@mui/icons-material/Search";

function LandingPage() {
  const [showNamicz, setshowNamicz] = useState(false);
  const [showRest, setshowRest] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  var cont = 0;
  return (
    <>
      <Header />
      <div className="block h-screen">
        <div className="w-full flex items-center text-center justify-center h-[94vh]">
          <h1 className="text-4xl">
            <Typewriter
              words={["Bem vindo ao "]}
              loop={1}
              cursor={false}
              typeSpeed={70}
              onType={() => {
                cont++;
                if (cont === 12) {
                  setshowNamicz(true);
                  cont = 0;
                }
              }}
            />

            {!!showNamicz && (
              <span className="border-b-4 font-medium border-slate-800">
                <Typewriter
                  words={["Namicz!"]}
                  loop={1}
                  cursor={false}
                  typeSpeed={70}
                  onType={() => {
                    cont++;
                    if (cont === 7) {
                      setshowRest(true);
                      cont = 0;
                    }
                  }}
                />
              </span>
            )}

            {!!showRest && (
              <Typewriter
                words={[
                  " ",
                  "a noss",
                  " A nossa plataforma de visualização de dados demográficos e geográficos!",
                ]}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={40}
                onDelete={() => {
                  cont--;
                }}
                onType={() => {
                  cont++;
                  if (cont === 73) {
                    setShowSlide(true);
                    cont = 0;
                  }
                }}
              />
            )}
          </h1>
        </div>

        {!!showSlide && (
          <Slide
            direction="up"
            in={showSlide}
            mountOnEnter
            unmountOnExit
            timeout={1000}>
            <div id="aboutBtn" className="flex justify-center items-center">
              <GoDownBtn
                addClasses="bg-slate-800 text-white hover:bg-black border-2 border-slate-800 rounded-sm shadow-2xl"
                goTo="#sobre"
              />
            </div>
          </Slide>
        )}
      </div>

      <div id="sobre" className="bg-slate-700 w-full h-full shadow-inner">
        <div className="h-[95vh] flex justify-evenly items-center">
          <div className="bg-slate-50 cursor-pointer">
            <img
              src={namiczImg}
              alt="namiczLogo"
              className=" w-96 h-96  shadow-2xl hover:scale-105 duration-150"
            />
          </div>

          <div className="border-[1px] border-slate-800 rounded-sm w-[45rem] h-fit shadow-2xl">
            <div className="w-full bg-slate-100 rounded-t-sm border-b-[1px] border-slate-800 py-5 pl-4">
              <h1 className="text-xl">
                <UnderlineTx text="O que é isso?" />
              </h1>
            </div>
            <div>
              <div className="py-5 px-14 bg-white">
                <h1>
                  O Namicz é uma plataforma revolucionária que fornece acesso
                  gratuito a uma riqueza de dados demográficos do Instituto
                  Brasileiro de Geografia e Estatística. Com foco na
                  visualização de informações detalhadas sobre nomes de pessoas
                  por região do Brasil, esta ferramenta intuitiva permite aos
                  usuários explorar e analisar facilmente as informações
                  geográficas e demográficas valiosas fornecidas pelo IBGE.
                </h1>
              </div>
            </div>
            <div className="bg-white rounded-b-sm pr-14 w-full h-24 flex justify-end items-center">
              <a
                href="/Map"
                className="flex items-center justify-center rounded-sm gap-1 h-11 p-1 pr-2 border-[1px] border-slate-400 text-slate-50 bg-slate-800 hover:bg-slate-700 hover:w-fit hover:px-3 duration-75">
                <SearchIcon className="text-slate-50" /> <p>Ver Mapa</p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pb-5">
          <GoDownBtn
            addClasses="bg-slate-50 text-bg-slate-800 hover:bg-slate-100 border-2 border-slate-50 rounded-sm shadow-2xl"
            goTo="#MoreContent"
          />
        </div>
      </div>

      <div className="shadow-[0_-65px_60px_-15px_rgba(0,0,0,0.3)] w-full py-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Veja mais sobre o nosso projeto!" />
          </h1>
        </div>

        <div className='pt-5 flex justify-center' id="MoreContent">
          <div className='w-fit text-2xl'>
            <ul className='flex'>
              <li><a href="/Finalidade" ><div className='bg-slate-50 border-[1px] hover:bg-slate-200 duration-75 p-5 w-56 text-center rounded-l-sm'>Finalidade</div></a></li>
              <li><a href="/Funcionalidade" ><div className='bg-slate-50 border-[1px] hover:bg-slate-200 duration-75 p-5 w-56 text-center'>Funcionalidade</div></a></li>
              <li><a href="/Tecnologias" ><div className='bg-slate-50 border-[1px] hover:bg-slate-200 duration-75 p-5 w-56 text-center'>Tecnologias</div></a></li>
              <li><a href="/Funcionalidade" ><div className='bg-slate-50 border-[1px] hover:bg-slate-200 duration-75 p-5 w-56 text-center'>Filtro de dados</div></a></li>
              <li><a href="/Map" ><div className='bg-slate-50 border-[1px] hover:bg-slate-200 duration-75 p-5 w-56 text-center rounded-r-sm'>Mapa de Dados</div></a></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
