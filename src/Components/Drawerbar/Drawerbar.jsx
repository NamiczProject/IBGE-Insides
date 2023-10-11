import { useEffect, useState } from "react";

// import component:
import Drawer from "react-modern-drawer";

//import styles:
import "react-modern-drawer/dist/index.css";

// import icons:
import AddIcon from "@mui/icons-material/Add";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ScienceIcon from "@mui/icons-material/Science";

// import utils:
import { getRanking } from "../../utils/getRanking";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";

function Drawerbar(props) {
  const [names, setNames] = useState(null);
  const [sex, setSex] = useState(false);
  const [dec, setDec] = useState(false);
  // console.log(names);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // console.log("names");

    // eslint-disable-next-line react/prop-types
    props.onFilter(sex, dec);
    getRanking(
      false,
      dec && dec != 1920 ? dec : false,
      sex && sex != "N/A" ? sex : false
    ).then((response) => {
      setNames(response[0].res);
      setDataLoaded(true);
    });

    // console.log("sex", sex);
    // console.log("dec", dec);
  }, [dataLoaded, sex, dec]);

  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const marks = [
    {
      value: 1920,
      label: "N/A",
    },
    {
      value: 1930,
      label: "1930",
    },
    {
      value: 2010,
      label: "2010",
    },
  ];
  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed z-50 sm:mt-[42px] md:mt-0 flex items-center group gap-1 text-white border-r border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 hover:z-10 duration-75">
        <AddIcon
          fontSize="medium"
          className="group-hover:animate-spin group-hover:hidden duration-75"
        />
        <div className="group-hover:flex hidden">
          <NavigateNextIcon fontSize="medium" />
        </div>
        <p className="group-hover:block hidden">Abrir Menu</p>
      </button>
      <a
        href={"./MoreInfo/BR"}
        rel="noreferrer"
        className="fixed z-50 sm:mt-[76px] md:mt-[34px] flex items-center group gap-1 text-white border-r-[1px] border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 duration-75">
        <ScienceIcon className="text-white group-hover:hidden" />
        <div className="group-hover:flex hidden">
          <QueryStatsIcon />
        </div>
        <h1 className="hidden group-hover:flex">Ver mais detalhes</h1>
      </a>
      <a
        href={"./#"}
        rel="noreferrer"
        className="fixed z-50 sm:mt-[110px] md:mt-[68px] flex items-center group gap-1 text-white border-[1px] border-l-0 border-t-0 rounded-br-sm border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 duration-75">
        <ExitToAppIcon className="text-white group-hover:hidden" />
        <div className="group-hover:flex hidden">
          <LogoutIcon />
        </div>
        <h1 className="hidden group-hover:flex">Voltar para página inicial</h1>
      </a>

      <Drawer
        open={isOpen}
        direction="left"
        overlayOpacity={0}
        enableOverlay={false}
        size={330}>
        <button
          onClick={toggleDrawer}
          className="fixed sm:mt-[42px] md:mt-0 right-0 translate-x-full flex items-center group gap-1 text-white border-r border-slate-50 border-b-slate-800 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 hover:z-10 duration-75">
          <CloseIcon className="text-white group-hover:hidden" />
          <div className="group-hover:flex hidden">
            <NavigateBeforeIcon />
          </div>
          <h1 className="hidden group-hover:flex">Fechar Menu</h1>
        </button>
        <a
          href={"./MoreInfo/BR"}
          rel="noreferrer"
          className="fixed right-0 translate-x-full flex items-center sm:mt-[76px] md:mt-[34px] group gap-1 text-white border-r border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:border-t-slate-50 hover:pr-2 hover:z-10 duration-75">
          <ScienceIcon className="text-white group-hover:hidden" />
          <div className="group-hover:flex hidden">
            <QueryStatsIcon />
          </div>
          <h1 className="hidden group-hover:flex">Ver mais detalhes</h1>
        </a>
        <a
          href={"./#"}
          rel="noreferrer"
          className="fixed right-0 translate-x-full flex items-center  sm:mt-[110px] md:mt-[68px] group gap-1 text-white border border-l-0 border-t-0 rounded-br-sm border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:border-t-slate-50 hover:pr-2 hover:z-10 duration-75">
          <ExitToAppIcon className="text-white group-hover:hidden" />
          <div className="group-hover:flex hidden">
            <LogoutIcon />
          </div>
          <h1 className="hidden group-hover:flex">
            Voltar para página inicial
          </h1>
        </a>
        <div>
          <Box className="border-b">
            <div className="bg-slate-800 flex p-5 justify-center text-xl text-white">
              <h1>Ranking do Brasil</h1>
            </div>

            {dataLoaded && (
              <Box className="m-2">
                <Box className="flex justify-around">
                  <Box className=" w-1/3 font-bold">
                    <h1>Nome</h1>
                  </Box>
                  <Box className=" w-1/3 justify-end flex font-bold">
                    <h1>Frequencia</h1>
                  </Box>
                </Box>
                {names.map((item, index) => (
                  <Box
                    key={index}
                    className="flex justify-around sm:text-xs md:text-base">
                    <Box className=" w-1/3">
                      <h1>{item.nome}</h1>
                    </Box>
                    <Box className=" w-1/3 justify-end flex">
                      <h1>{item.frequencia}</h1>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          <Box className="flex flex-col items-center justify-center p-3 px-10 absolute border">
            <FormControl className="flex items-center justify-center">
              <div className="text-center border-b sm:py-0 md:py-5">
                <h1 className="font-bold">Gênero</h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="N/A"
                  onChange={(e) => setSex(e.target.value)}>
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Feminino"
                  />
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Masculino"
                  />
                  <FormControlLabel
                    value="N/A"
                    control={<Radio />}
                    label="Todos"
                  />
                </RadioGroup>
              </div>

              <div className="w-full text-center sm:py-0 md:py-5">
                <Box className="mt-2">
                  <h1 className="font-bold">Decada</h1>
                </Box>
                <Slider
                  track={false}
                  aria-label="Decada"
                  defaultValue={1920}
                  getAriaValueText={(value) => {
                    return value == 2020 ? "Todas" : value;
                  }}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => {
                    return value == 1920 ? "Todas" : value;
                  }}
                  step={10}
                  marks={marks}
                  min={1920}
                  max={2010}
                  onChange={(e) => setDec(e.target.value)}
                />
              </div>
            </FormControl>
          </Box>
        </div>
      </Drawer>
    </>
  );
}

export default Drawerbar;
