import kingdomBusiness4 from "../assets/imgs/kingdoom-business-4.png";

export default function WithWhom() {
  return (
    <div className="gallery divider px-4 py-16 md:px-0 md:pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 text-center">
          <h2 className="block md:hidden text-white mb-6">Yuri Tor andou com Quem?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <img
              src={kingdomBusiness4}
              width={900}
              height={562}
              alt="Yuri Tor Andou com Quem?"
            />
          </div>

          <div className="hidden md:block">
            <h2 className="text-white mb-6">Yuri Tor andou com Quem?</h2>
            <p className="text-white">
              Yuri Tor andou e treinou com Os <b>MAIORES</b> player do mercado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-10 text-center">
          <p className="block md:hidden text-white">
            Yuri Tor andou e treinou com Os <b>MAIORES</b> player do mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
