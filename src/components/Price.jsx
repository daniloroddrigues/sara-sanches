import imgPayments from "../assets/imgs/icons/icon-payments.svg";

// 0px 30px 50px 0px rgba(149.1335044868554, 83.86243206521738, 255, 0.33)

export default function Price() {
  return (
    <div className="price px-4 py-16 md:px-0 md:py-24">
      <div className="text-center mx-auto">
        <h2 className="mb-8">Escolha seu melhor plano</h2>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="price-content">
              <div className="price-content-head">
                <h2>Palestra Empresarial – O Poder da Transformação</h2>
                <p>Um momento único para inspirar sua equipe.</p>
                <ul>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Duração:</b> 1 hora.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Resultados:</b> Ativação e equilíbrio da equipe.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Destaques:</b> Alinhamento de frequência.
                  </li>
                </ul>
                <p className="por12x">por 12x de</p>
                <h2 className="price-full">R$140,00</h2>
                <p className="ou">
                  ou a vista{" "}
                  <u>
                    <b>R$ 1.400,00</b>
                  </u>
                </p>
                <h3 className="motivar">Quer motivar sua equipe?</h3>
              </div>
              <div className="price-content-bottom">
                <a
                  href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                  className="btn-default btn-primary"
                  target="_blank"
                >
                  Solicite sua Palestra Agora
                </a>
                <img className="w-72 mx-auto" src={imgPayments} alt="Smart" />
              </div>
            </div>

            <div className="price-content">
              <div className="price-content-head">
                <h2>Treinamento - O Poder da Transformação</h2>
                <p>Um evento único e impactante para inspirar sua equipe.</p>
                <ul>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Duração:</b> 8 horas de transformação prática
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Dia:</b> Sábado das 08:00hs as 18:00hs.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Resultados:</b> Ativação, equilíbrio, alinhamento e alta
                    performance.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Destaques:</b> Ferramentas exclusivas de programação
                    neurolinguística, psicologia positiva, PNL e muito mais.
                  </li>
                </ul>
                <p className="por12x">por colaborador</p>
                <h2 className="price-full">R$ 498,50</h2>
                <h3 className="motivar">Quer inspirar e ativar sua equipe?</h3>
              </div>
              <div className="price-content-bottom">
                <a
                  href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                  className="btn-default btn-primary"
                  target="_blank"
                >
                  Solicite sua Palestra Agora
                </a>
                <img className="w-72 mx-auto" src={imgPayments} alt="Smart" />
              </div>
            </div>

            <div className="price-content">
              <div className="price-content-head">
                <h2>Programa Ativação Empresarial - 3 Meses</h2>
                <p>
                  Ideal para empresas que precisam de um choque de transformação
                  rápido e eficiente.
                </p>
                <ul>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Diagnóstico do estado atual da empresa.</b>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Identificação dos valores dos sócios</b> e criação do{" "}
                    <b>Manual de Cultura.</b>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Treinamento de Alta Performance</b> para a equipe.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Reuniões semanais</b> de acompanhamento presencial
                  </li>
                </ul>
                <h3 className="motivar">Precisa de Resultados Rápidos?</h3>
              </div>
              <div className="price-content-bottom">
                <a
                  href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                  className="btn-default btn-primary"
                  target="_blank"
                >
                  Agende Agora Seu Diagnóstico Gratuito!
                </a>
                <img className="w-72 mx-auto" src={imgPayments} alt="Smart" />
              </div>
            </div>

            <div className="price-content">
              <div className="price-content-head">
                <h2>Programa de Ativação Empresarial – 6 Meses</h2>
                <p>
                  Para empresários comprometidos com mudanças estruturais e
                  sustentáveis.
                </p>
                <ul>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Tudo do programa de 3 meses</b> + desenvolvimento
                    contínuo em vendas e liderança.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Avaliações Multidirecionais</b> de inteligência emocional
                    e performance da equipe.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Brainstorming estratégico</b> para inovação e
                    crescimento.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Resultados esperados:</b> Equipe mais alinhada, cultura
                    sólida e aumento contínuo da performance.
                  </li>
                </ul>
                <h3 className="motivar">Quer Consolidação e Crescimento?</h3>
              </div>
              <div className="price-content-bottom">
                <a
                  href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                  className="btn-default btn-primary"
                  target="_blank"
                >
                  Fale com um Especialista Hoje
                </a>
                <img className="w-72 mx-auto" src={imgPayments} alt="Smart" />
              </div>
            </div>

            <div className="price-content">
              <div className="price-content-head">
                <h2>
                  Programa de Ativação Empresarial – 12 Meses (Transformação
                  Completa)
                </h2>
                <p>
                  Nosso programa mais abrangente, ideal para empresas que buscam
                  <b>uma verdadeira revolução interna e sustentável.</b>
                </p>
                <ul>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Tudo incluído nos programas de 3 e 6 meses.</b>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>
                      Mentoria personalizada para líderes e gestores ao longo de
                      todo o período
                    </b>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Revisões trimestrais</b> do Manual de Cultura e metas
                    organizacionais.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>
                      Avaliações contínuas de inteligência emocional, vendas e
                      liderança.
                    </b>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>Treinamentos complementares</b> para sustentar o
                    crescimento.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <b>
                      Estratégias personalizadas para atingir resultados acima
                      da média.
                    </b>
                  </li>
                </ul>
                <h3 className="motivar">Resultados esperados:</h3>
                <ul>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    Cultura sólida e inspiradora.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    Equipe completamente alinhada e engajada.
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    Crescimento de longo prazo garantido.
                  </li>
                </ul>
                <h3 className="motivar">
                  Pronto para revolucionar sua empresa?
                </h3>
              </div>
              <div className="price-content-bottom">
                <a
                  href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                  className="btn-default btn-primary"
                  target="_blank"
                >
                  Solicite uma Proposta Personalizada
                </a>
                <img className="w-72 mx-auto" src={imgPayments} alt="Smart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
