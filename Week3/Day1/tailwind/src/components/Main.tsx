import img from "../assets/Half Cut Pizza.png";
const Main = () => {
  return (
    <main className="bg-custom-light-cream h-screen flex ">
      <section className=" ml-6 mt-40 max-w-screen-xl">
        <div className="w-3/6 min-w-80">
          <h1 className="text-custom-rich-red font-google-sans font-bold text-2xl pb-5">
            Savor Every Slice at Domino's – Where Fresh Meets Flavor!
          </h1>
          <p className="text-custom-grey font-google-sans font-bold pb-9">
            From hand-tossed classics to gourmet specials, we serve
            mouth-watering pizza, made fresh daily with the finest ingredients.
            Order now and taste the difference!
          </p>
          <button className="bg-custom-rich-red opacity-90 text-white font-google-sans font-semibold px-6 py-2 rounded-md hover:bg-custom-yellow active:bg-custom-rich-red transition duration-300 ease-in-out">
            Order Now
          </button>
        </div>
      </section>
      <section className="flex">
        <div className="w-3/">
          <img src={img} alt="Pizza Image" className=" h-screen max-w-sm" />
        </div>
      </section>
    </main>
  );
};

export default Main;
