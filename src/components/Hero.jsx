import logoAtivacaoEmpresarial from "../assets/imgs/logo-sara-sanches-gl.png";
import imgPayments from "../assets/imgs/icons/icon-payments.svg";
import user1 from "../assets/imgs/users/user-1.jpg";
import user2 from "../assets/imgs/users/user-2.jpg";
import user3 from "../assets/imgs/users/user-3.jpg";
import user4 from "../assets/imgs/users/user-4.jpg";
import user5 from "../assets/imgs/users/user-5.jpg";
import user6 from "../assets/imgs/users/user-6.jpg";
import StarIcon from "../components/StarIcon";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container mx-auto">
        <div className="flex flex-col px-4 md:flex-row md:px-4 lg:px-0 image-hero">
          <div className="flex-1 w-full text-center md:text-left md:flex-none md:w-3/6">
            <img
              className="mx-auto md:mx-0 mb-4"
              src={logoAtivacaoEmpresarial}
              alt="Ativação Empresarial - Metodologia e Aceleração de Lucros reais."
              width={160}
              height={46}
            />

            <h1 className="text-sm text-white mb-4 md:mb-6">
              <span>Descubra o que os Gigantes do Mercado de ÓTICA</span> Fazem
              para Entregar Valor e <span>Faturar Mais!</span>
            </h1>
            <p className="text-white mb-6 md:mb-7">
              Conheça o <b>Método CÉU</b> - A Mentoria que vai acelerar suas
              Vendas em 10x!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=556299937132&text=Ol%C3%A1,%20Quero%20faturar%2010x%20mais"
              className="btn-default btn-primary w70"
              target="_blank"
            >
              Quero Faturar 10x Mais!
            </a>
            <img className="w-96 mt-5 mb-5" src={imgPayments} alt="Smart" />

            <div className="peoples-list flex items-center">
              <div className="img-peoples flex pr-4">
                <img
                  className="object-cover"
                  src={user1}
                  alt=""
                  width={35}
                  height={35}
                />
                <img
                  className="object-cover"
                  src={user2}
                  alt=""
                  width={35}
                  height={35}
                />
                <img
                  className="object-cover"
                  src={user3}
                  alt=""
                  width={35}
                  height={35}
                />
                <img
                  className="object-cover"
                  src={user4}
                  alt=""
                  width={35}
                  height={35}
                />
                <img
                  className="object-cover"
                  src={user5}
                  alt=""
                  width={35}
                  height={35}
                />
                <img
                  className="object-cover"
                  src={user6}
                  alt=""
                  width={35}
                  height={35}
                />
              </div>
              <div className="star-content">
                <div className="star flex">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="start-text">
                  Aprovado por <span>+de 100 empresas Óticas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full sm:flex-none md:w-3/6"></div>
        </div>
      </div>
    </div>
  );
}
