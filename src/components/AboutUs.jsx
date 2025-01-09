export default function AbountUs() {
  return (
    <div className="about-us pt-8 px-4 md:px-0 md:py-16">
      <div className="container md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="text-left mb-3">
              <p className="about-mentoring">COMO FUNCIONA A MENTORIA</p>
            </div>
            <h2 className="text-white uppercase mb-4">
              Como funciona, na prática, <span>o método céu</span> - Mentoria
              para empresários de ótica!
            </h2>
          </div>
          <div className="col-span-2">
            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 1</span> Conhecimento de dados
                </h3>
                <p className="mt-6">
                  Vamos conhecer a história da empresa, as dificuldades,
                  facilidades, rotina, desafíos diários e traçar um plano de
                  meta.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 2</span> Metas personalizadas
                </h3>
                <p className="mt-6">
                  A empresa terá acesso á metas personalizadas diárias do que
                  precisa ser feito para acelerar seu faturamento na empresa.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 3</span> Acompanhamento exclusivo
                </h3>
                <p className="mt-6">
                  A empresa seguirá com metas diárias disponibilizadas para ele
                  na nossa plataforma e será acompanhado individualmente a cada
                  15 dias por ligações telefônicas, video chamada ou whatsapp.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 4</span> Encontro ao vivo
                </h3>
                <p className="mt-6">
                  A empresa terá encontro ao vivo em grupo com a equipe via
                  zoom, para desbloquear o acesso é necessário caminhar nas
                  outras etapas acima.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 5</span> Você está pronto
                </h3>
                <p className="mt-6">
                  A empresa está apta a faturar 10x mais. É entregue toda
                  solução do método céu. Hora de ir para cima!
                </p>
              </div>
            </div>

            <div className="col-span-1 py-12 pb-8 sm:pb-0">
              <a
                href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                className="btn-default btn-primary"
                target="_blank"
              >
                Quero Transformar Minha Empresa!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
