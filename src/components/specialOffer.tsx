export function SpecialOffer() {
  return (
    <section className="flex flex-col-reverse  md:flex-row gap-12 md:items-center my-40 md:my-64 ">
              <img src="./images/offer.svg" alt="" />
    <div className="">
    <h1 className="text-4xl font-semibold mb-8"><span className="text-btn">Special   </span> Offer</h1>
      <p className="text-lg text-slate-700 mt-4"> Embark on a shopping journey that redefines your experience
      with unbeatable deals. From premier selections to incredible savings, we
      offer unparalleled value that sets us apart. Navigate a realm of</p>
     <p className="text-lg text-slate-700 mt-4"> possibilities designed to fulfill your unique desires, surpassing the
      loftiest expectations. Your journey with us is nothing short of
      exceptional.</p>
      <div className="grid grid-cols-2 gap-2 mt-16 ">
      <div className="flex justify-between item-center bg-btn   md:w-44 rounded-full py-2 md:py-4 px-4 md:px-8 text-sm ">
          <button className="text-text md:text-base">Shop now </button>
          <img src="./icons/arrow-right.svg" alt="btn" className="w-4 h-4"/>
        </div>
      <button className="text-slate-700  border text-sm md:w-44  rounded-full py-2 md:py-4 px-4 md:px-8 md:text-base ">Learn more </button>

      </div>
    </div>
    </section>
  );
}
