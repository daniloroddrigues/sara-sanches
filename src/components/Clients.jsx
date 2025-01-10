import Slider from "react-slick";

import YoutubeEmbed from "./YoutubeEmbed";
import logoImpactOtica from "../assets/imgs/clients/client-impacto-otica.jpg";
import logoLionOtica from "../assets/imgs/clients/client-lion-oticas-1.jpg";

export default function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="clients divider px-4 py-16 md:px-0 md:pb-20">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="about-mentoring">DEPOIMENTOS</p>
        </div>
        <h2 className="text-white uppercase text-center pb-6 md:pb-12 md:max-w-lg lg:max-w-4xl mx-auto">
          O que dizem nossos empresários sobre o{" "}
          <span className="text-gold">Método CÉU</span>
        </h2>

        <Slider
          className="main-slider md:max-w-2xl md:mx-auto lg:max-w-full"
          {...settings}
        >
          <div className="img-slider">
            <YoutubeEmbed embedId={"yIeQ9quCPfU"} title={"Método CÉU 01"} />
          </div>
          <div className="img-slider">
            <YoutubeEmbed embedId={"e0NwnpmDP-k"} title={"Método CÉU 02"} />
          </div>
          <div className="img-slider">
            <YoutubeEmbed embedId={"vdAr4LDqUXY"} title={"Método CÉU 03"} />
          </div>
        </Slider>

        <h2 className="text-center text-white mt-16">
          Empresas que <span className="text-gold-dark">confiaram na Nossa MENTORIA</span>
        </h2>

        <div className="grid grid-cols-1 justify-items-center mx-auto md:max-w-2xl md:grid-cols-2 py-10">
          <img
          className="mb-4 md:mb-0"
            src={logoImpactOtica}
            width={135}
            height={135}
            alt="Impact Ótica"
          />
          <img
            src={logoLionOtica}
            width={135}
            height={135}
            alt="Lion Ótica"
          />
        </div>
      </div>
    </div>
  );
}
