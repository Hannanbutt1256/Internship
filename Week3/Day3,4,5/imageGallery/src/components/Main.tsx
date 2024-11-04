import image from "../assets/nature (1).jpg";
import image1 from "../assets/nature (2).jpg";
import image2 from "../assets/nature (3).jpg";
import image3 from "../assets/nature (4).jpg";
import image4 from "../assets/nature (5).jpg";
import image5 from "../assets/nature (6).jpg";
import image6 from "../assets/nature (7).jpg";
import image7 from "../assets/nature (8).jpg";
import image8 from "../assets/nature (9).jpg";
import image9 from "../assets/nature (10).jpg";
import image10 from "../assets/nature (11).jpg";
import image11 from "../assets/nature (12).jpg";
import image12 from "../assets/nature (13).jpg";

const Main = () => {
  return (
    <div className="p-3 px-7 text-charcoal font-mont">
      <h2 className="text-center font-semibold text-xl">Photo Gallery</h2>
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 ">
        <div>
          <img src={image} className="rounded-2xl" />
        </div>
        <div>
          <img src={image1} className="rounded-2xl" />
        </div>
        <div>
          <img src={image2} className="rounded-2xl" />
        </div>
        <div>
          <img src={image3} className="rounded-2xl" />
        </div>
        <div>
          <img src={image4} className="rounded-2xl" />
        </div>
        <div>
          <img src={image5} className="rounded-2xl" />
        </div>
        <div>
          <img src={image6} className="rounded-2xl" />
        </div>
        <div>
          <img src={image7} className="rounded-2xl" />
        </div>
        <div>
          <img src={image8} className="rounded-2xl" />
        </div>
        <div>
          <img src={image9} className="rounded-2xl" />
        </div>
        <div>
          <img src={image10} className="rounded-2xl" />
        </div>
        <div>
          <img src={image11} className="rounded-2xl" />
        </div>
        <div>
          <img src={image12} className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Main;
