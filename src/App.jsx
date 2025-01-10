import "./App.css";
import { Suspense, lazy } from "react";

const AboutUs = lazy(() => import("./components/AboutUs"));
const SaraSanches = lazy(() => import("./components/SaraSanches"));
const Hero = lazy(() => import("./components/Hero"));
const Mentoring = lazy(() => import("./components/Mentoring"));
const Clients = lazy(() => import("./components/Clients"));
const Footer = lazy(() => import("./components/Footer"));

import imgDashboardVendas from "./assets/imgs/dashboard-metodologia.png";

function App() {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TQXS33F5"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>

      <Suspense fallback={<div>Loading...</div>}>
        <Hero />

        <main className="main relative">
          <Mentoring />

          <AboutUs />

          <div className="call-to-action pb-28 px-4 md:px-0">
            <div className="container mx-auto">
              <div className="about-us-content bg-expert grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="about-us-content-img"></div>

                <div className="about-us-text">
                  <p>
                    <b>
                      Cada fase foi desenhada para ser decisiva no seu Negócio!
                    </b>
                    <br />
                    <br />
                    Em todas as fases, o empresário contará com uma equipe
                    treinada e que visa a empresa completa
                    <br />
                    <br />
                    <b>A seu crescimento é a nossa Missão</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="methodology-structure px-4 md:px-0 py-24">
            <div className="container mx-auto">
              <div className="text-center mb-8">
                <p className="about-mentoring">ESTRUTURA DA METODOLOGIA</p>
              </div>
              <h2 className="text-white uppercase text-center pb-6 md:pb-12 md:max-w-lg lg:max-w-4xl mx-auto">
                Você receberá a melhor{" "}
                <span>mentoria e estrutura do mercado</span>
              </h2>
              <p className="text-white text-lg text-center md:max-w-lg lg:max-w-2xl mx-auto">
                Área de membros, com conteúdos gravados de forma didática e de
                fácil compreenssão. Aulas online ao vivo. Aulas práticas do
                conteúdo.{" "}
                <span className="text-gold">
                  Exercícios para verificação de aprendizagem.
                </span>
              </p>
              <p className="text-white text-lg text-center md:max-w-lg lg:max-w-2xl mx-auto">
                Planilhas de acompanhamento prontas para você fazer somente com
                o <span className="text-gold">CONTROL C e CONTROL V</span> para
                o seu negócio.
              </p>
              <div className="text-center py-10 md:py-16">
                <a
                  href="https://api.whatsapp.com/send?phone=556299937132&text=Ol%C3%A1,%20Quero%20faturar%2010x%20mais"
                  className="btn-default btn-primary"
                  target="_blank"
                >
                  Quero Faturar 10x Mais!
                </a>
              </div>
              <div>
                <img
                  className="mx-auto"
                  src={imgDashboardVendas}
                  width={850}
                  height={608}
                  alt="Planilhas de Vendas"
                />
              </div>
            </div>
          </div>
          <Clients />
          <SaraSanches />
        </main>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
