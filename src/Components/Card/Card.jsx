import UnderlineTx from "../Basic/UnderlineTx";

function Card({ title, description, image, goTo }) {
  return (
    <div className="flex">
      <a href={goTo} className="bg-white md:hover:scale-105 sm:scale-75 md:scale-100 sm:hover:scale-[80%] duration-75 group">
      <div className="w-96 min-h-[45rem] border-[1px]">
        <div className="p-10 overflow-hidden">
          <img src={image} alt={title} className="group-hover:scale-105 duration-75"/>
        </div>
        <div className="border-slate-200 border-t-[1px] pl-5 pt-3">
          <h1 className="text-xl">
            <UnderlineTx text={title}></UnderlineTx>
          </h1>
        </div>
        <div className="p-5">
          <h1>{description}</h1>
        </div>
      </div>
    </a>
    </div>
  );
}

export default Card;
