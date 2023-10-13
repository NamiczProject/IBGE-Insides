import React from "react";

// Components:
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

// Icons:
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import UnderlineTx from "../../Components/Basic/UnderlineTx";

function Purposes() {
  return (
    <>
      <Header />

      <div
        id="finalidade"
        className="w-full h-screen pt-28">
        <div className="flex justify-center items-center mb-4">
          <div className="border-[1px] rounded-sm w-[45rem] h-fit shadow-2xl duration-100 hover:scale-[1.02]">
            <div className="w-full rounded-t-sm border-b-[1px] py-5 flex justify-center">
              <h1 className="text-xl">
                Nossa finalidade, a <UnderlineTx text="antroponomástica" />:
              </h1>
            </div>
            <div className="py-5 px-14 bg-white">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias nam quasi ut tenetur iste labore expedita voluptatem
                sapiente minus inventore voluptatum qui at debitis maxime,
                laborum nobis suscipit minima maiores. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid dolorum similique
                impedit delectus ullam molestias voluptas laborum harum
                cupiditate eveniet ea libero, praesentium laboriosam nam,
                commodi at, deleniti laudantium quae? Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Doloremque, fugiat quasi.
                Expedita porro, ea, nemo fuga blanditiis dolor dolores ab
                officiis, inventore accusantium est aut obcaecati atque! Minus,
                autem qui?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia
                eos officiis quasi minima facilis, accusantium ullam earum
                repellat maiores ea obcaecati sequi eius itaque. Facilis illo
                debitis sequi rerum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reiciendis vitae molestiae ipsa nostrum dicta
                laborum necessitatibus adipisci laudantium accusamus,
                voluptatibus sed est voluptatum deleniti, numquam ut, et illo
                iste earum.
              </h1>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae quidem consectetur eaque rem molestias hic, quaerat
                omnis sit possimus, doloribus alias veritatis illo asperiores
                dolorum vero doloremque dicta neque! Nihil? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Tempore, illum
                recusandae. At ullam a corporis distinctio, maxime officia. Odit
                dolorum similique repellat, eaque nam enim nesciunt id
                distinctio consequatur unde? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo id, quia et laboriosam
                culpa excepturi possimus quod consequatur autem tempore eligendi
                rerum velit quae odit rem quis corrupti eaque cupiditate.
              </h1>
            </div>
            <div className="rounded-sm pl-14 w-full h-24 flex items-center">
              <a
                href="#"
                className="flex items-center justify-center gap-1 h-11 p-2 border-[1px] border-slate-950 text-slate-950 rounded-sm hover:bg-slate-50 hover:w-fit hover:px-3 duration-75">
                <AutoStoriesIcon className="text-slate-950" />{" "}
                <p>Saiba mais!</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Purposes;
