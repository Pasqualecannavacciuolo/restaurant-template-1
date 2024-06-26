import white_negroni from "./assets/white_negroni.webp";
import holiday_needed from "./assets/delicious-caipirinha-with-lemon-slices.webp";
import gimlet_al_kumquat from "./assets/GIMLET AL KUMQUAT.webp";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const CocktailMenu = () => {
  return (
    <main className="py-8 bg-zinc-900 min-h-screen">
      <Helmet>
        <title>Scopri i Nostri Cocktail - Antica Farmacia 1154</title>
        <meta
          name="description"
          content="Esplora i nostri cocktail unici preparati con ingredienti freschi e creatività. Scopri il White Negroni, Holiday Needed, Gimlet al Kumquat e altri cocktail raffinati."
        />
        <meta
          name="keywords"
          content="cocktail, White Negroni, Holiday Needed, Gimlet al Kumquat, Antica Farmacia 1154, mixology, drink"
        />
        <meta
          property="og:title"
          content="Scopri i Nostri Cocktail - Antica Farmacia 1154"
        />
        <meta
          property="og:description"
          content="Esplora i nostri cocktail unici preparati con ingredienti freschi e creatività. Scopri il White Negroni, Holiday Needed, Gimlet al Kumquat e altri cocktail raffinati."
        />
        <meta
          property="og:url"
          content="https://antica-farmacia.netlify.app/cocktails"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Antica Farmacia 1154" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-center text-3xl mb-7 mt-5 page-title subpixel-antialiased"
      >
        <h1>I nostri cocktail</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8"
      >
        {/* Cocktail #1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-lg overflow-hidden mx-5 my-3 flex flex-col lg:flex-col items-center justify-center"
        >
          {/* PARTE MOBILE */}
          <div className="flex items-center mb-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-16 h-16 lg:w-full lg:h-full flex items-center justify-center"
            >
              <img
                src={white_negroni}
                loading="eager"
                alt="Negroni Bianco"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              <h2>White Negroni</h2>
            </motion.div>
          </div>
          {/* PARTE DESKTOP */}
          <div className="md:flex md:flex-col md:items-center md:mb-4 hidden">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              <h2>White Negroni</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-16 h-auto lg:w-full lg:h-full flex items-center justify-center"
            >
              <img
                src={white_negroni}
                loading="eager"
                alt="Negroni Bianco"
                className="w-full h-full object-cover lg:h-48"
              />
            </motion.div>
          </div>
          <div className="p-4 text-center lg:text-left flex-1">
            <p className="text-white mb-4 text-justify md:h-44 cocktail-description subpixel-antialiased">
              Il{" "}
              <span className="text-highlight subpixel-antialiased">
                White Negroni
              </span>{" "}
              è una variante del classico Negroni che sostituisce il
              tradizionale vermut rosso con vermut bianco. Preparato con gin,
              vermut bianco e bitter, questo cocktail offre un profilo aromatico
              più leggero e fresco rispetto alla versione originale. È servito
              solitamente in un bicchiere old fashioned con ghiaccio e una
              scorza di agrume come decorazione. Il White Negroni mantiene
              l'equilibrio tra dolcezza, amarezza e complessità, rendendolo una
              scelta apprezzata per gli amanti dei cocktail raffinati.
            </p>
            <details className="xl:mt-16">
              <summary className="text-lg font-medium text-white text-justify cursor-pointer subpixel-antialiased">
                Ingredienti
              </summary>
              <p className="pt-5 pb-5 text-base font-medium text-yellow-50 text-justify subpixel-antialiased">
                Playmouth Gin, Italicus, Lillet Blanc, Liquore di genziana
              </p>
            </details>
            <p className="mt-5 prezzo text-white text-justify subpixel-antialiased">
              Prezzo:{" "}
              <span className="subpixel-antialiased text-highlight">9€</span>
            </p>
          </div>
        </motion.div>

        {/* Cocktail #2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="rounded-lg overflow-hidden mx-5 my-3 flex flex-col lg:flex-col items-center justify-center"
        >
          {/* PARTE MOBILE */}
          <div className="flex items-center mb-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-16 h-auto lg:w-full lg:h-full flex items-center justify-center"
            >
              <img
                src={holiday_needed}
                loading="eager"
                alt="Holiday Needed"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              <h2>Holiday Needed</h2>
            </motion.div>
          </div>
          {/* PARTE DESKTOP */}
          <div className="md:flex md:flex-col md:items-center md:mb-4 hidden">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              <h2>Holiday Needed</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-16 h-auto lg:w-full lg:h-full flex items-center justify-center"
            >
              <img
                src={holiday_needed}
                loading="eager"
                alt="Negroni Bianco"
                className="w-full h-full object-cover lg:h-48"
              />
            </motion.div>
          </div>
          <div className="p-4 text-center lg:text-left flex-1">
            <p className="text-white mb-4 text-justify md:h-44 cocktail-description subpixel-antialiased">
              L'{" "}
              <span className="text-highlight subpixel-antialiased">
                L'Holiday Needed
              </span>{" "}
              è un cocktail brasiliano fatto con cachaca, zucchero di canna e
              lime fresco. È fresco, bilanciato tra dolcezza e acidità, e
              rappresenta un'icona della cultura brasiliana, perfetto per chi
              ama bevande vivaci e agrumate.
            </p>
            <details className="xl:mt-16">
              <summary className="text-lg font-medium text-white text-justify cursor-pointer subpixel-antialiased">
                Ingredienti
              </summary>
              <p className="pt-5 pb-5 text-base font-medium text-yellow-50 text-justify subpixel-antialiased">
                Barsol Pisco, Palomino Fino, Timo Limone, Lime, Tonica
                Mediterranea
              </p>
            </details>
            <p className="mt-5 prezzo text-white text-justify subpixel-antialiased">
              Prezzo:{" "}
              <span className="subpixel-antialiased text-highlight">9€</span>
            </p>
          </div>
        </motion.div>

        {/* Cocktail #3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="rounded-lg overflow-hidden mx-5 my-3 flex flex-col lg:flex-col items-center justify-center"
        >
          {/* PARTE MOBILE */}
          <div className="flex items-center mb-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-16 h-auto lg:w-full lg:h-full flex items-center justify-center"
            >
              <img
                src={gimlet_al_kumquat}
                loading="eager"
                alt="Gimlet al Kumquat"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              <h2>Gimlet al Kumquat</h2>
            </motion.div>
          </div>
          {/* PARTE DESKTOP */}
          <div className="md:flex md:flex-col md:items-center md:mb-4 hidden">
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              <h2>Gimlet al Kumquat</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-16 h-auto lg:w-full lg:h-full flex items-center justify-center"
            >
              <img
                src={gimlet_al_kumquat}
                loading="eager"
                alt="Gimlet al Kumquat"
                className="w-full h-full object-cover lg:h-48"
              />
            </motion.div>
          </div>
          <div className="p-4 text-center lg:text-left flex-1">
            <p className="text-white mb-4 text-justify md:h-44 cocktail-description subpixel-antialiased">
              Il{" "}
              <span className="text-highlight subpixel-antialiased">
                Gimlet al Kumquat
              </span>{" "}
              è una variante del classico Gimlet che incorpora il sapore unico e
              leggermente agrumato del kumquat. Preparato con gin, succo fresco
              di kumquat e sciroppo semplice, questo cocktail offre una
              combinazione di dolcezza e acidità con una nota distintiva di
              agrume. Servito in un bicchiere da cocktail con ghiaccio, è
              decorato con una fettina di kumquat per un tocco finale di
              freschezza e presentazione. Il Gimlet al Kumquat è perfetto per
              chi cerca un twist intrigante su un cocktail classico, ideale per
              serate estive o come aperitivo raffinato.
            </p>
            <details className="xl:mt-16">
              <summary className="text-lg font-medium text-white text-justify cursor-pointer subpixel-antialiased">
                Ingredienti
              </summary>
              <p className="pt-5 pb-5 text-base font-medium text-yellow-50 text-justify subpixel-antialiased">
                Plymouth Gin, Kumquat, Sherry Fino
              </p>
            </details>
            <p className="mt-5 prezzo text-white text-justify subpixel-antialiased">
              Prezzo:{" "}
              <span className="subpixel-antialiased text-highlight">9€</span>
            </p>
          </div>
        </motion.div>

        {/* Repeat this block for each cocktail */}
      </motion.div>
    </main>
  );
};

export default CocktailMenu;
