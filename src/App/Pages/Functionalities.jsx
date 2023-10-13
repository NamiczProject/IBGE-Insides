import React from "react";

// Components:
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import UnderlineTx from "../../Components/Basic/UnderlineTx";
import Card from "../../Components/Card/Card";

// Images:
import brasilCardImg from "../../assets/brasil-card-image.png";
import rankingCardImg from "../../assets/ranking-card-image.png";
import searchCardImg from "../../assets/search-card-image.png";

function Functionalities() {
  return (
    <>
      <Header />

      <div id="funcionalidades" className="w-full h-screen pt-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Funcionalidades" />
          </h1>
        </div>

        <div className="flex justify-evenly items-start py-10">
          <Card
            title="Visualização de dados"
            description="A análise de dados no NAMICZ permite entender a distribuição geográfica de nomes de pessoas, revelando preferências culturais e variações regionais. Isso ajuda os usuários a compreender as características demográficas de uma região e é útil em pesquisas socioculturais, estudos de mercado e planejamento urbano."
            image={brasilCardImg}
            goTo="/Estado"
          />
          <Card
            title="Ranking de nomes"
            description="A plataforma gera um ranking hierarquizado dos nomes mais comuns em diferentes regiões geográficas, considerando dados demográficos e populacionais relevantes. Isso permite comparar a popularidade dos nomes em diferentes localidades, fornecendo uma perspectiva valiosa sobre as preferências de nomes em várias áreas geográficas e facilitando a análise de dados demográficos.."
            image={rankingCardImg}
            goTo="#funcionalidades"
          />
          <Card
            title="Pesquisa de nomes"
            description="A pesquisa de nomes no Namicz é essencial para explorar dados demográficos relacionados a nomes de pessoas. Os usuários podem buscar nomes específicos, explorar nomes populares em regiões e filtrar dados com critérios personalizados, como faixa etária e gênero, permitindo análises detalhadas das preferências de nomes em grupos específicos"
            image={searchCardImg}
            goTo="/Map"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Functionalities;
