import React from "react";

function CardImage({ title, image, onClick, isVisible }) {
  return (
    <div
      className={`flex w-fit h-fit hover:scale-105 duration-75 border-[1px] rounded-xl shadow-xl ${
        isVisible ? "" : "hidden"
      }`}
    >
      <button onClick={onClick}>
        <div>
          <img
            src={image}
            alt={title}
            className="w-48 p-3"
          />
        </div>
        <div className="border-t-[1px] p-3 text-center">
          <h1>{title}</h1>
        </div>
      </button>
    </div>
  );
}

export default CardImage;
