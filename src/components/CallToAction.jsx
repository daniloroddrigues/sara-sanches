export default function CallToAction() {
  return (
    <div className="container-call-to-action px-4 py-16 md:px-0">
      <div className="text-center mx-auto">
        <h2 className="text-white mb-8">Garantia e Contato</h2>
        <p className="text-white">
          A Transformação da Sua Empresa Está Garantida.
        </p>
        <p className="text-white">
          Parte do pagamento só é feito quando os resultados aparecem. Seu
          sucesso é nosso compromisso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-7">
          <p className="text-white">WhatsApp: (00) 9 0000-0000</p>
          <p className="text-white">E-mail: email@hotmail.com</p>
        </div>

        <p className="text-white pb-7">
          Address: Av. T-2, N° 238 - QD 98 LT 6 - St. Bueno, Goiânia - GO, 74210-010
        </p>

        <a
          href="#"
          className="btn-default btn-primary"
          target="_blank"
        >
          Quero Falar com um Especialista!
        </a>
      </div>
    </div>
  );
}
