import { imgheader, price } from "../constants";
import { useState } from "react";

export function HeroSection() {
  const [imagemSelecionada, setImagemSelecionada] = useState(
    "./images/big-shoe1.png"
  );
  const handleClick = (url) => {
    setImagemSelecionada(url);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between gap-10 mb-40 md:mb-64">
      <article className="w-full md:w-1/2 ">
        <h2 className="text-lg leading-6 mb-12 text-btn">
          Our Summer Collection
        </h2>
        <h1 className=" text-5xl md:text-7xl leading-[60px] md:leading-[100px] font-semibold mb-8 ">
          New Collection
          <span className="text-btn"> Converse</span>
        </h1>
        <p className="text-base text-slate-700 md:text-lg leading-6 mb-12 max-w-md ">
          Discover stylish Converse arrivals, quality comfort, and innovation
          for your active life.
        </p>
        <div className="flex justify-between bg-btn  w-44 rounded-full py-4 px-8 my-16 ">
          <button className="text-text">Shop now </button>
          <img src="./icons/arrow-right.svg" alt="btn" />
        </div>
        <div className="flex gap-12 md:gap-16 lg:gap-20 flex-wrap">
          {price.map((itemprice) => (
            <div className="" key={itemprice.labelprice}>
              <h1 className="text-4xl font-bold">{itemprice.labelprice}</h1>
              <p className="text-base text-slate-700 ">{itemprice.product}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="w-full md:w-1/2 flex flex-col items-center justify-center max-h-[720px] bg-header relative">
        <div className="">
          <img
            src={imagemSelecionada}
            alt="imagemSelecionada"
            className="w-[150px] md:w-[400px] h-96 my-28 ball"
          />
        </div>

        <div className=" flex gap-2 flex-row  absolute -bottom-10 md:-bottom-20 right-12  ">
          {imgheader.map((imageLink) => (
            <img
              src={imageLink.img_url}
              alt="shoe"
              key={imageLink.id}
              className="w-[100px] md:w-[200px]  bg-[url('./images/thumbnail-background.svg')] bg-no-repeat bg-cover rounded-xl "
              onClick={() => handleClick(imageLink.img_url)}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
