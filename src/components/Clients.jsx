import Slider from "react-slick";

import YoutubeEmbed from "./YoutubeEmbed";
import logoClientFull from "../assets/imgs/clients/clientes-full.jpg";

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
        <Slider
          className="main-slider md:max-w-2xl md:mx-auto lg:max-w-full"
          {...settings}
        >
          <div className="img-slider">
            <YoutubeEmbed
              embedId={"O7oxJfStDdI"}
              title={"CEO Wenisteen W2sat"}
            />
          </div>
          <div className="img-slider">
            <YoutubeEmbed
              embedId={"AmG6UxTBmYk"}
              title={"Doutor Óculos - Yuri."}
            />
          </div>
          <div className="img-slider">
            <YoutubeEmbed
              embedId={"W_Yn0fN22mU"}
              title={"Depoimento Andre W2sat"}
            />
          </div>
          <div className="img-slider">
            <YoutubeEmbed
              embedId={"VhdAcn9Padk"}
              title={"Depoimento Stefane Albuquerque W2sat"}
            />
          </div>
          <div className="img-slider">
            <YoutubeEmbed
              embedId={"C4IY_tSOIxc"}
              title={"Ativação Empresarial"}
            />
          </div>
          <div className="img-slider">
            <YoutubeEmbed embedId={"5lgwrzqc_Q8"} title={"Depoimento W2sat"} />
          </div>

          <div className="img-slider">
            <YoutubeEmbed
              embedId={"3MWIa5ls8GM"}
              title={"Depoimento Giovana w2sat"}
            />
          </div>
          <div className="img-slider">
            <YoutubeEmbed embedId={"d3D--BvO0SQ"} title={"Doutor Óculos."} />
          </div>
        </Slider>

        <h2 className="text-center mt-16">
          Empresas que confiaram na Ativação Empresarial
        </h2>

        <div className="grid grid-cols-1 mx-auto md:max-w-2xl md:grid-cols-1 py-10">
          <img
            src={logoClientFull}
            width={1920}
            height={1080}
            alt="Clientes Impactados pela Ativação Empresarial"
          />
        </div>
      </div>
    </div>
  );
}
