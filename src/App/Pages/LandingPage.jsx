// Dependencies:
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

// Components:
import Header from "../../Components/Header/Header";
import UnderlineTx from "../../Components/Basic/UnderlineTx";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";

// Images:
import namiczImg from "../../assets/namicz-Icon.svg";
import brasilCardImg from "../../assets/brasil-card-image.png";
import rankingCardImg from "../../assets/ranking-card-image.png";
import searchCardImg from "../../assets/search-card-image.png";
import reactCardImg from "../../assets/react-card-image.png";
import viteCardImg from "../../assets/vite-card-image.png";
import githubCardImg from "../../assets/github-card-image.png";
import materialUICardImg from "../../assets/mui-card-image.png";
import mapboxGLCardImg from "../../assets/mapbox-card-image.png";
import tailwindCSSCardImg from "../../assets/tailwind-card-image.png";

// Icons:
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function LandingPage() {
  const [showNamicz, setshowNamicz] = useState(false);
  const [showRest, setshowRest] = useState(false);

  var cont = 0;
  return (
    <>
      <Header />

      {/* Tela 1 */}
      <div className="min-h-screen sm:text-sm sm:px-6 md:text-2xl md:px-10 lg:text-4xl lg:px-16 flex items-center text-center justify-center">
        <h1 className="">
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
            />
          )}
        </h1>
      </div>

      {/* Tela 2 */}
      <div
        id="Sobre"
        className="bg-slate-700 w-full min-h-screen shadow-inner h-full flex justify-evenly items-center">
        <div className="bg-slate-50 cursor-pointer sm:hidden md:hidden lg:block">
          <img
            src={namiczImg}
            alt="namiczLogo"
            className=" w-96 h-96  shadow-2xl hover:scale-105 duration-150"
          />
        </div>

        <div className="border-[1px] border-slate-800 rounded-sm md:w-[35rem] lg:w-[45rem] h-fit shadow-2xl sm:scale-75 md:scale-90 lg:scale-100">
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
                Brasileiro de Geografia e Estatística. Com foco na visualização
                de informações detalhadas sobre nomes de pessoas por região do
                Brasil, esta ferramenta intuitiva permite aos usuários explorar
                e analisar facilmente as informações geográficas e demográficas
                valiosas fornecidas pelo IBGE.
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

      {/* Tela 3 */}
      <div
        id="Finalidade"
        className="flex justify-center items-center w-full px-2 min-h-screen shadow-[0_-65px_60px_-15px_rgba(0,0,0,0.3)] sm:text-justify pt-28">
        <div className="border-[1px] rounded-sm w-[45rem] h-fit shadow-2xl duration-100 lg:hover:scale-105">
          <div className="w-full rounded-t-sm border-b-[1px] py-5 flex justify-center bg-white">
            <h1 className="text-xl">
              Nossa finalidade, a <UnderlineTx text="antroponomástica" />:
            </h1>
          </div>
          <div className="py-5 px-14 bg-white">
            <h1>
            O estudo de nomes é uma importante forma de análise de aspectos socioeconômicos da formação de uma sociedade 
            e de seu caráter histórico. Nosso projeto visa a Antroponímia do Brasil, a análise dos nomes próprios no Brasil, 
            através de uma plataforma web onde é possível a visualização de estatísticas de nomes, seja ela por estado, 
            ou até mesmo por todo país. Com ela será possível visualizar todo o território brasileiro de forma interativa 
            e dinâmica, visando acessibilidade e facilidade de uso e principalmente a exposição do fenômeno de nomes, 
            fenômeno este pouco abordado na mídia.
            </h1>
            <h1>
              A antroponomástica não é um assunto muito midiático no Brasil, portanto queremos fazer com que essa área da onomástica 
              tenha mais visibilidade no âmbito nacional. 
            </h1>
            <h1>
            Em síntese, o estudo de nomes próprios é uma janela fascinante para explorar a história, a cultura e a diversidade de uma sociedade. 
            O projeto de Antroponímia do Brasil representa uma iniciativa importante para desbravar esse fenômeno muitas vezes esquecido. 
            </h1>
          </div>
          <div className="rounded-sm sm:justify-center lg:pl-14 md:p-0 md:justify-center lg:justify-start w-full h-24 flex items-center bg-white">
            <a
              href="https://books.google.com.br/books?hl=pt-BR&lr=&id=MTHrDwAAQBAJ&oi=fnd&pg=PP1&dq=nomes+pr%C3%B3prios&ots=N_C77K7N0t&sig=e5MHNNJ_pIg3CjPjZ7VorGZy9x8#v=onepage&q&f=false"
              className="flex items-center justify-center gap-1 h-11 p-2 border-[1px] border-slate-950 text-slate-950 rounded-sm hover:bg-slate-50 hover:px-3 duration-75">
              <AutoStoriesIcon className="text-slate-950" /> <p>Saiba mais!</p>
            </a>
          </div>
        </div>
      </div>

      {/* Tela 4 */}
      <div id="Funcionalidade" className="w-full min-h-screen pt-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Funcionalidades" />
          </h1>
        </div>

        <div className="flex sm:flex-col md:flex-col lg:flex-row pt-10 lg:px-14 md:px-0 justify-around md:gap-10 md:scale-100 items-center">
          <Card
            title="Visualização de dados"
            description="A análise de dados no NAMICZ permite entender a distribuição geográfica de nomes de pessoas, revelando preferências culturais e variações regionais. Isso ajuda os usuários a compreender as características demográficas de uma região e é útil em pesquisas socioculturais, estudos de mercado e planejamento urbano."
            image={brasilCardImg}
            goTo="/MoreInfo/BR"
          />
          <Card
            title="Ranking de nomes"
            description="A plataforma gera um ranking hierarquizado dos nomes mais comuns em diferentes regiões geográficas, considerando dados demográficos e populacionais relevantes. Isso permite comparar a popularidade dos nomes em diferentes localidades, fornecendo uma perspectiva valiosa sobre as preferências de nomes em várias áreas geográficas e facilitando a análise de dados demográficos.."
            image={rankingCardImg}
            goTo="#/Map"
          />
          <Card
            title="Pesquisa de nomes"
            description="A pesquisa de nomes no Namicz é essencial para explorar dados demográficos relacionados a nomes de pessoas. Os usuários podem buscar nomes específicos, explorar nomes populares em regiões e filtrar dados com critérios personalizados, como faixa etária e gênero, permitindo análises detalhadas das preferências de nomes em grupos específicos"
            image={searchCardImg}
            goTo="/MoreInfo/BR"
          />
        </div>
      </div>

      {/* Tela 5 */}
      <div id="Tecnologias" className="w-full pt-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Tecnologias" />
          </h1>
        </div>

        <div className="flex justify-center w-full pt-10 pb-28">
          <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-10 sm:grid-cols-1 sm:gap-5">
            <Card
              title="React"
              description="React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais."
              image={reactCardImg}
              goTo="https://pt-br.reactjs.org/"
            />
            <Card
              title="Vite"
              description="Vite é um construtor de aplicações web que visa oferecer uma experiência de desenvolvimento de desenvolvedor extremamente rápida. Ele faz isso através do agrupamento de módulos ES e de um servidor de desenvolvimento com recarga rápida do módulo (HMR) integrado."
              image={viteCardImg}
              goTo="https://vitejs.dev/"
            />
            <Card
              title="GitHub"
              description="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo."
              image={githubCardImg}
              goTo="https://github.com"
            />
            <Card
              title="Material UI"
              description="Material-UI é uma biblioteca de componentes simples e personalizáveis para construir aplicativos React mais rápidos, bonitos e acessíveis. A biblioteca de componentes React para um desenvolvimento web mais rápido e fácil. Crie interfaces de usuário bonitas e responsivas usando os componentes Material Design."
              image={materialUICardImg}
              goTo="https://material-ui.com/pt/"
            />
            <Card
              title="Mapbox GL"
              description="Mapbox GL JS é uma biblioteca JavaScript para renderizar mapas interativos em navegadores da web e aplicativos móveis. Ele fornece uma API para adicionar camadas personalizadas, controles e ferramentas de interação de mapa para o seu aplicativo."
              image={mapboxGLCardImg}
              goTo="https://docs.mapbox.com/"
            />
            <Card
              title="TailwindCSS"
              description="Tailwind CSS é um framework CSS de código aberto que utiliza uma abordagem de utilitários CSS para construir projetos customizados. Ele fornece classes de baixo nível que você pode combinar para criar qualquer interface de usuário que você desejar."
              image={tailwindCSSCardImg}
              goTo="https://tailwindcss.com/"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
