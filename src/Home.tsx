import logo from "./assets/logo.webp";
import hero_cocktail_img from "./assets/hero-section-cocktail.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <section className="text-white body-font bg-zinc-900 h-screen flex items-center justify-center">
      <Helmet>
        <title>Antica Farmacia 1154 - Cocktail e Piatti Raffinati</title>
        <meta
          name="description"
          content="Scopri l'Antica Farmacia 1154, dove storia e innovazione si incontrano in ogni sorso e boccone. Esplora i nostri cocktail e piatti raffinati."
        />
        <meta
          name="keywords"
          content="Antica Farmacia 1154, cocktail, piatti raffinati, storia, innovazione, cocktail bar, ristorante"
        />
        <meta
          property="og:title"
          content="Antica Farmacia 1154 - Cocktail e Piatti Raffinati"
        />
        <meta
          property="og:description"
          content="Scopri la storia di Antica Farmacia 1154, dove tradizione e innovazione si incontrano. Dal nostro inizio fino ad oggi, il nostro impegno nel creare esperienze uniche con cocktail e piatti raffinati."
        />
        <meta property="og:url" content="https://antica-farmacia.netlify.app" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow mt-1 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-3 md:mb-0 px-4">
          <img src={logo} alt="Logo" className="logo" />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-title text-4xl font-extrabold leading-9 tracking-tight mb-3 text-white sm:text-4xl sm:leading-10 md:text-7xl md:leading-normal"
          >
            Antica Farmacia 1154
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8 leading-relaxed dark:text-gray-300 md:text-xl hero-text"
          >
            Dove storia e innovazione si incontrano in ogni sorso e boccone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center"
          >
            <Link
              to={"/cocktails"}
              className="inline-flex text-zinc-800 bg-[#FF6922] border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-[#ec7943] rounded text-lg cta"
            >
              Scopri i cocktails
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="lg:max-w-lg lg:w-full mb-1 md:mb-0 md:w-1/2 w-2/6 flex justify-center"
        >
          <img
            src={hero_cocktail_img}
            alt="Immagine di un cocktail con decorazione sul bordo del bicchiere."
          />
        </motion.div>
      </div>
    </section>
  );
}
