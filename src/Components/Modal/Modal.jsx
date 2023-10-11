/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import UnderlineTx from "../Basic/UnderlineTx.jsx";
// import { getCountyMesh } from "./getCountyMesh";
// import { useEffect, useState } from "react";
// import { getRankingNames } from "./getRankingNames";

import CloseIcon from "@mui/icons-material/Close";

export default function Modaldiv({
  open,
  handleClose,
  countyName,
  codeArea,
  ranking,
  acronym,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div className="sm:w-screen sm:h-screen md:w-[30rem] md:h-fit absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex flex-col sm:rounded-none md:rounded-sm sm:bg-white">
        <div className="flex justify-center py-4 bg-slate-800 text-white text-2xl rounded-t-sm sm:rounded-none md:rounded-sm">
          <h1>{countyName}</h1>
          <button onClick={handleClose} className="fixed right-0 top-0 w-[50px] h-[64px] sm:block md:hidden">
            <CloseIcon />
          </button>
        </div>

        <div className="bg-white pt-2 p-4 w-full">
          <div className=" mb-2 border-b-[1px] border-slate-300 pb-2">
            <h1 className="text-xl text-center pb-2">
              <UnderlineTx text="Ranking" />
            </h1>
          </div>
          <div className="flex justify-around">
            <div className="w-1/2 font-bold">
              <h1>Nome</h1>
            </div>
            <div className="w-1/2 justify-end flex font-bold">
              <h1>Frequencia</h1>
            </div>
          </div>
          {!!ranking && (
            <div className="sm:text-sm">
              {ranking.map((item, index) => (
                <div key={index} className="flex justify-around">
                  <div className=" w-1/2">
                    <h1>{item.nome}</h1>
                  </div>
                  <div className=" w-1/2 justify-end flex">
                    <h1>{item.frequencia}</h1>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="pt-2 mt-3 mx-2 border-t-[1px] rounded-b-sm border-slate-300 text-center w-full sm:hidden md:block">
            <h1>CodeArea: {codeArea}</h1>
          </div>
          <div className="sm:bottom-16 sm:left-1/2 sm:-translate-x-1/2 sm:absolute md:relative md:pt-2 md:bottom-auto md:translate-x-0 md:left-0">
            {/* a href para a página que exibe mais detalhes do estado */}
            <a href={`./MoreInfo/${acronym}`} rel="noreferrer">
              <h1>
                <div className="flex justify-center items-center bg-slate-800 border-white hover:bg-slate-600 text-white p-2 rounded-sm duration-75 w-full">
                  Ver mais detalhes
                </div>
              </h1>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
