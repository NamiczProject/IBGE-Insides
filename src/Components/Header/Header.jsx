import React from "react";

// Import Components:
import Logo from "../../Components/Basic/Logo";

// Import Icons:
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  function togleSubMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  function togleContentMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className="fixed top-0 h-20 z-50 flex justify-between items-center w-screen bg-slate-100 py-5 px-10">
        <div className="sm:block md:hidden">
          <button
            onClick={togleSubMenu}
            className="flex justify-center items-center">
            {isSubMenuOpen ? (
              <KeyboardArrowDownIcon className="text-black" fontSize="large" />
              ) : (
              <MenuIcon className="text-black" fontSize="large" />
            )}
          </button>
        </div>

        <div className="sm:right-0">
          <Logo />
        </div>

        <div className="sm:hidden md:block">
          <ul className="flex">
            <li className="mr-5">
              <a href="/#" className="text-slate-500 hover:text-black">
                Início
              </a>
            </li>
            <li className="mr-5">
              <button
                onClick={togleContentMenu}
                className="text-slate-500 hover:text-black group">
                Sobre
                <div className="bg-white border shadow-lg absolute -translate-x-[20%] group-hover:grid hover:grid hidden">
                  <a
                    href="/Finalidade"
                    className="text-slate-500 hover:text-black border-b px-8 py-2 hover:bg-slate-100 duration-75">
                    Finalidade
                  </a>
                  <a
                    href="/Funcionalidade"
                    className="text-slate-500 hover:text-black border-b px-8 py-2 hover:bg-slate-100 duration-75">
                    Funcionalidade
                  </a>
                  <a
                    href="/Tecnologias"
                    className="text-slate-500 hover:text-black px-8 py-2 hover:bg-slate-100 duration-75">
                    Tecnologias
                  </a>
                </div>
              </button>
            </li>

            <li className="mr-5">
              <a
                href="/MoreInfo/BR"
                className="text-slate-500 hover:text-black">
                Filtro de dados
              </a>
            </li>
            <li className="mr-5">
              <a
                href="/Map"
                className="text-slate-200 bg-slate-800 px-3 py-2 rounded-sm hover:text-slate-50 hover:bg-black duration-75">
                VER MAPA
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SubMenu */}
      {isSubMenuOpen && (
        <div className='mt-20 bg-slate-500 flex justify-center shadow-xl md:hidden sm:fixed'>
          <ul className="">
            <li><a href="/#"><div className="bg-slate-50 p-2 pl-10 border-b w-screen hover:bg-slate-200 duration-75">Inicio</div></a></li>
            <li><a href="/Finalidade"><div className="bg-slate-50 p-2 pl-10 border-b w-screen hover:bg-slate-200 duration-75">Finalidades</div></a></li>
            <li><a href="/Funcionalidade"><div className="bg-slate-50 p-2 pl-10 border-b w-screen hover:bg-slate-200 duration-75">Funcionalidades</div></a></li>
            <li><a href="/Tecnologias"><div className="bg-slate-50 p-2 pl-10 border-b w-screen hover:bg-slate-200 duration-75">Tecnologias</div></a></li>
            <li><a href="/MoreInfo/BR"><div className="bg-slate-50 p-2 pl-10 border-b w-screen hover:bg-slate-200 duration-75">Filtro de dados</div></a></li>
            <li><a href="/Map"><div className="bg-slate-50 p-2 pl-10 border-b w-screen hover:bg-slate-200 duration-75">Ver mapa</div></a></li>
          </ul>
        </div>)}
    </>
  );
}

export default Header;
