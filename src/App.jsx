import "./App.css";
import { Suspense, lazy } from "react";

const AboutUs = lazy(() => import("./components/AboutUs"));
const Price = lazy(() => import("./components/Price"));
const CallToAction = lazy(() => import("./components/CallToAction"));
const Yuri = lazy(() => import("./components/Yuri"));
const Hero = lazy(() => import("./components/Hero"));
const Mentoring = lazy(() => import("./components/Mentoring"));
const Gallery = lazy(() => import("./components/Gallery"));
const Clients = lazy(() => import("./components/Clients"));
const Footer = lazy(() => import("./components/Footer"));

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

          <div className="call-to-action">
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

          <Gallery />

          <Clients />

          <Price />

          <Yuri />

          <CallToAction />
        </main>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
