import { Helmet } from "react-helmet";
import top_image from "./assets/storia/1.webp";
import center_image from "./assets/storia/2.webp";
import bottom_image from "./assets/storia/3.webp";
import { motion } from "framer-motion";

const Storia = () => {
  return (
    <div className="bg-zinc-900 font-sans leading-normal tracking-normal min-h-screen flex items-center justify-center">
      <Helmet>
        <title>La Nostra Storia - Antica Farmacia 1154</title>
        <meta
          name="description"
          content="Scopri la storia di Antica Farmacia 1154, dove tradizione e innovazione si incontrano. Dal nostro inizio fino ad oggi, il nostro impegno nel creare esperienze uniche con cocktail e piatti raffinati."
        />
        <meta
          name="keywords"
          content="storia, Antica Farmacia 1154, tradizione, innovazione, cocktail, piatti raffinati"
        />
        <meta property="og:title" content="Storia dell'Antica Farmacia 1154" />
        <meta
          property="og:description"
          content="Scopri la storia di Antica Farmacia 1154, dove tradizione e innovazione si incontrano. Dal nostro inizio fino ad oggi, il nostro impegno nel creare esperienze uniche con cocktail e piatti raffinati."
        />
        <meta
          property="og:url"
          content="https://antica-farmacia.netlify.app/storia"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Antica Farmacia 1154" />
      </Helmet>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="p-8 rounded-lg shadow-md w-full max-w-4xl"
      >
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-center text-3xl mb-7 mt-5 page-title subpixel-antialiased"
          >
            <h1 className="text-2xl font-bold mb-4 text-center text-white page-title">
              La nostra storia
            </h1>
          </motion.div>
          <div className="mb-6 text-center">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-full h-64 object-cover rounded-lg mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <img src={top_image} alt="Palazzo Troisi" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white text-lg mx-auto about-description text-justify"
              style={{ maxWidth: "600px" }}
            >
              <p>
                Situata nel Palazzo Troisi, storico palazzo del 1800 costruito
                proprio nella piazza principale di Arienzo, cittadina della
                terra murata che ha origini nel 1154 e che rappresenta il nucleo
                più antico dell’attuale città, nei secoli oggetto di diverse
                dominazioni. Al piano terra di questo palazzo vi era la Farmacia
                Troisi, storica farmacia della Valle di Suessola, che trova la
                sua fine nel dopoguerra.
              </p>
            </motion.div>
          </div>

          <div className="mb-6 text-center">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-full h-64 object-cover rounded-lg mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <img src={center_image} alt="Interno del locale" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white text-lg mx-auto about-description text-justify"
              style={{ maxWidth: "600px" }}
            >
              <p>
                E’ proprio qui che nel Giugno 2021 nasce Antica Farmacia 1154,
                un luogo di tendenza che abbina sempre più di frequente cocktail
                e food. Il locale nasce come mezzo di espressione dei fratelli
                Antonio e Giuseppe Carfora. Antonio, chef con un passato nelle
                cucine di Alain Ducasse a Londra, 4 anni alla Terrazza dell’Eden
                di Roma e 2 da Zaranda a Palma de Mallorca. Giuseppe, bartender
                con esperienze londinesi, formative in fatto di bere miscelato,
                tra le quali quella di head bartender al German Gymnasium. Il
                primo ed il secondo hanno unito le rispettive competenze aprendo
                un locale tutto loro.
              </p>
            </motion.div>
          </div>

          <div className="mb-6 text-center">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-full h-auto object-cover rounded-lg mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <img src={bottom_image} alt="Cocktail e piatti" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-white text-lg mx-auto about-description text-justify"
              style={{ maxWidth: "600px" }}
            >
              <p>
                Antica Farmacia 1154 offre una cucina autentica: piatti con
                influenze giapponesi, peruviane, spagnole e cinesi, ma
                soprattutto dai sapori mediterranei, con ingredienti stagionali
                e nostrani. Stessa cosa nel bere: la carta dei cocktail è ampia
                e offre diversi distillati provenienti da tutto il mondo,
                miscelati con attenzione e tecnica con ingredienti altrettanto
                nostrani e stagionali. Non manca una carta dei vini ben
                articolata e con attenzione soprattutto alla produzione
                regionale, poi al resto dell’Italia, alla Francia e agli
                champagne.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default Storia;
