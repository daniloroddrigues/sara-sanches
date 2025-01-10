import { motion } from "motion/react";

export default function AbountUs() {
  return (
    <div className="about-us pt-8 px-4 md:px-0 md:py-16">
      <div className="container md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
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
                  <span>FASE 1</span> Dois encontros mensais personalizados para
                  foco total nos resultados
                </h3>
                <p className="mt-6">
                  Consultores de Vendas: Um encontro exclusivo para a equipe,
                  com foco no desenvolvimento de habilidades de atendimento e
                  técnicas de vendas estratégicas. Eles aprenderão como
                  transformar oportunidades simples em vendas de alta
                  performance e aumentar o ticket médio de cada cliente. <br />
                  <br />
                  Donos de Ótica: Um encontro dedicado a você, com orientações
                  sobre liderança, gestão de equipes e estratégias para escalar
                  os resultados da sua ótica.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 2</span> Área de Membros Exclusiva
                </h3>
                <p className="mt-6">
                  Um portal completo com toda a parte técnica da óptica,
                  acessível 24/7.
                  <br />
                  <br />
                  Módulos gravados para treinar e capacitar sua equipe em tempo
                  recorde, sem necessidade de parar a operação da loja.
                  <br />
                  <br />
                  Contratou um novo colaborador? Basta colocá-lo para maratonar
                  os módulos e garantir que ele esteja pronto para performar
                  desde o primeiro dia.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 3</span> Suporte Full Time no WhatsApp
                </h3>
                <p className="mt-6">
                  Grupo exclusivo para você e sua equipe, com respostas rápidas
                  para dúvidas técnicas e estratégias no dia a dia.
                  <br />
                  <br />
                  Consultoria contínua para ajudar a superar desafios pontuais e
                  aproveitar todas as oportunidades de venda.
                </p>
              </div>
            </div>

            <div className="about-us-content grid grid-cols-1 gap-4 mb-8">
              <div className="about-us-text">
                <h3>
                  <span>FASE 4</span> Resultados Reais
                </h3>
                <p className="mt-6">
                  Transforme sua equipe em consultores de vendas preparados para
                  encantar clientes e aumentar o faturamento.
                  <br />
                  <br />
                  Crie processos replicáveis e eficientes, garantindo resultados
                  consistentes e escaláveis.
                  <br />
                  <br />
                  Aumente o ticket médio e posicione sua ótica como referência
                  em atendimento e vendas.
                </p>
              </div>
            </div>

            <div className="col-span-1 py-12 pb-8 sm:pb-0">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
                className="btn-default btn-primary"
                target="_blank"
              >
                Quero Transformar Minha Empresa!
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
