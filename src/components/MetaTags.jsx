import { Helmet } from "react-helmet";
import "@fontsource/almarai";
import "@fontsource/anta";
import AlmaraiWoff2 from "@fontsource/almarai/files/almarai-arabic-400-normal.woff2?url";
import AntaWoff2 from "@fontsource/anta/files/anta-latin-400-normal.woff2";

export default function MetaTags() {
  return (
    <Helmet>
      <title>Sara Saches - Posicionamento, Exelência e Rentabilidade.</title>
      <meta
        name="description"
        content="Descubra o que os gigantes do Mercado Ótica fazem para entregar valor e faturar mais!"
      />
      <meta
        name="keywords"
        content="treinamento empresarial, metodologia empresarial, método céu, venda para óticas"
      />
      <meta name="author" content="Sara Sanches" />
      <meta property="og:title" content="Método CÉU" />
      <meta
        property="og:description"
        content="Descubra o que os gigantes do Mercado Ótica fazem para entregar valor e faturar mais!"
      />
      <meta property="og:image" content="/card.png" />
      <meta
        property="og:url"
        content="https://sara-sanches.vercel.app"
      />
      <meta name="twitter:title" content="Ativação Empresarial" />
      <meta
        name="twitter:description"
        content="Descubra o que os gigantes do Mercado Ótica fazem para entregar valor e faturar mais!"
      />
      <meta name="twitter:image" content="/card.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href={AlmaraiWoff2}
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href={AntaWoff2}
        crossOrigin="anonymous"
      />
    </Helmet>
  );
}
