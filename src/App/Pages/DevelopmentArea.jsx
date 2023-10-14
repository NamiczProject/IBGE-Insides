import React from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

function DevelopmentArea() {
  return (
    <>
      <Header />
      <div className="h-screen sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 flex justify-center items-center">
        {/* Card com informações genéricas para teste*/}

        <Card
          title="Título do Card"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl."
          image="https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"
          goTo="#"
        /><Card
        title="Título do Card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl."
        image="https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"
        goTo="#"
      /><Card
      title="Título do Card"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultrices nunc, vitae ultrices nisl nisl vitae nisl."
      image="https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"
      goTo="#"
    />
      </div>
      <Footer />
    </>
  );
}

export default DevelopmentArea;
