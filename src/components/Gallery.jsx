import kingdomBusiness3 from "../assets/imgs/kingdoom-business-3.png";

export default function Gallery() {
  return (
    <div className="gallery divider px-4 py-16 md:px-0 md:pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 text-center">
          <h2 className="block md:hidden text-white mb-6">Kingdom Business</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <img
              src={kingdomBusiness3}
              width={900}
              height={562}
              alt="Evento Kingdom Business"
            />
          </div>

          <div className="hidden md:block">
            <h2 className="text-white mb-6">Kingdom Business</h2>
            <p className="text-white">
              Apresentador e Sócio da Kingdom Business Conference Um dos maiores
              eventos de Empreendedorismo do Centro-Oeste.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-10 text-center">
          <p className="block md:hidden text-white">
            Apresentador e Sócio da Kingdom Business Conference Um dos maiores
            eventos de Empreendedorismo do Centro-Oeste.
          </p>
        </div>
      </div>
    </div>
  );
}
