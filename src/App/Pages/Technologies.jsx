import React from "react";

// Components:
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import UnderlineTx from "../../Components/Basic/UnderlineTx";

function Technologies() {
  return (
    <>
      <Header />

      <div id="tecnologias" className="w-full pt-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Tecnologias" />
          </h1>
        </div>

        <div className="flex justify-center w-full py-10 mb-10">
          <div className="grid grid-cols-3 gap-10">
            <Card
              title="React"
              description="React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais."
              image="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
              goTo="https://pt-br.reactjs.org/"
            />
            <Card
              title="Vite"
              description="Vite é um construtor de aplicações web que visa oferecer uma experiência de desenvolvimento de desenvolvedor extremamente rápida. Ele faz isso através do agrupamento de módulos ES e de um servidor de desenvolvimento com recarga rápida do módulo (HMR) integrado."
              image="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
              goTo="https://vitejs.dev/"
            />
            <Card
              title="GitHub"
              description="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo."
              image="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
              goTo="https://github.com"
            />
            <Card
              title="Material UI"
              description="Material-UI é uma biblioteca de componentes simples e personalizáveis para construir aplicativos React mais rápidos, bonitos e acessíveis. A biblioteca de componentes React para um desenvolvimento web mais rápido e fácil. Crie interfaces de usuário bonitas e responsivas usando os componentes Material Design."
              image="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
              goTo="https://material-ui.com/pt/"
            />
            <Card
              title="Mapbox GL"
              description="Mapbox GL JS é uma biblioteca JavaScript para renderizar mapas interativos em navegadores da web e aplicativos móveis. Ele fornece uma API para adicionar camadas personalizadas, controles e ferramentas de interação de mapa para o seu aplicativo."
              image="https://seeklogo.com/images/M/mapbox-logo-D6FDDD219C-seeklogo.com.png"
              goTo="https://docs.mapbox.com/"
            />
            <Card
              title="TailwindCSS"
              description="Tailwind CSS é um framework CSS de código aberto que utiliza uma abordagem de utilitários CSS para construir projetos customizados. Ele fornece classes de baixo nível que você pode combinar para criar qualquer interface de usuário que você desejar."
              image="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
              goTo="https://tailwindcss.com/"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Technologies;
