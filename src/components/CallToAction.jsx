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
          <p className="text-white">WhatsApp: (62) 99211-8711</p>
          <p className="text-white">E-mail: yuricomercial@hotmail.com</p>
        </div>

        <p className="text-white pb-7">
          Av. T-2, N° 238 - QD 98 LT 6 - St. Bueno, Goiânia - GO, 74210-010
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5562992118711&text=Ol%C3%A1,%20vi
m%20do%20site%20e%20quero%20de%20saber%20mais%20sobre%20as%20palestr
as%20e%20programas%20empresariais!"
          className="btn-default btn-primary"
          target="_blank"
        >
          Quero Falar com um Especialista!
        </a>
      </div>
    </div>
  );
}
