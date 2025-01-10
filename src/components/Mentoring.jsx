import iconPocisionamento from "../assets/imgs/icons/icon-posicionamento.png";
import iconExcelencia from "../assets/imgs/icons/icon-excelencia.png";
import iconMoney from "../assets/imgs/icons/icon-money-g.png";

export default function Mentoring() {
  return (
    <div className="container-mentoring py-0 md:py-20">
      <div className="container mx-auto">
        <div className="business pt-6 px-4 md:pt-12">
          <div className="text-center">
            <p className="about-mentoring">SOBRE A MENTORIA</p>
          </div>
          <h2 className="text-white text-center pt-4 pb-6 md:pt-4 md:pb-12 md:max-w-lg lg:max-w-4xl mx-auto">
            O que é o <span>MÉTODO CÉU?</span>
          </h2>

          <p className="text-white text-center mb-3 md:max-w-2xl md:mb-12 lg:max-w-4xl mx-auto">
            O método céu tem 3 importante pilares.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
            <div className="mentoring-list">
              <img
                src={iconPocisionamento}
                className="mb-3"
                alt="Anúncios"
                width={47}
                height={47}
              />
              <h3 className="mb-3">Posicionamento</h3>
              <p>
                Sua marca como referência em qualidade, atendimento encantador e
                soluções visuais completas, conquistando a confiança e
                preferência dos clientes ao alinhar sua identidade à excelência
                e rentabilidade no mercado óptico.
              </p>
            </div>
            <div className="mentoring-list">
              <img
                src={iconExcelencia}
                className="mb-3"
                alt="Anúncios"
                width={47}
                height={47}
              />
              <h3 className="mb-3">Excelência</h3>
              <p>
                Garantir um padrão impecável de atendimento, produtos e
                serviços, criando experiências encantadoras que fidelizam
                clientes e destacam sua marca como líder no mercado.
              </p>
            </div>
            <div className="mentoring-list">
              <img
                src={iconMoney}
                className="mb-3"
                alt="Anúncios"
                width={47}
                height={47}
              />
              <h3 className="mb-3">Rentabilidade</h3>
              <p>
                Maximizar lucros de forma sustentável, aumentando o faturamento
                em 10x por meio de estratégias eficientes, uma equipe comercial
                de alta performance e clientes fidelizados pelo encantamento.
              </p>
            </div>
          </div>

          <div className="text-center py-10 md:py-16">
            <a
              href="https://api.whatsapp.com/send?phone=556299937132&text=Ol%C3%A1,%20Quero%20faturar%2010x%20mais"
              className="btn-default btn-primary"
              target="_blank"
            >
              Quero Faturar 10x Mais!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
