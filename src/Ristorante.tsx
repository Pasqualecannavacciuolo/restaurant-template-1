import { motion } from "framer-motion";
import hot_food_icon from "./assets/ristorante/hot.webp";
import cold_food_icon from "./assets/ristorante/cold.webp";
import bio_food_icon from "./assets/ristorante/bio.webp";
import { Helmet } from "react-helmet";

const RistoranteMenu = () => {
  return (
    <main className="py-8 bg-zinc-900 min-h-screen">
      <Helmet>
        <title>I Nostri Piatti - Antica Farmacia 1154</title>
        <meta
          name="description"
          content="Scopri i nostri piatti raffinati e deliziosi, dal Tacos di Cochinita Pibil al Tuna Roll e al Maritozzo Salato. Gusta la nostra cucina che combina tradizione e innovazione."
        />
        <meta
          name="keywords"
          content="piatti raffinati, Tacos di Cochinita Pibil, Tuna Roll, Maritozzo Salato, Antica Farmacia 1154, cucina raffinata, cucina internazionale"
        />
        <meta
          property="og:title"
          content="I Nostri Piatti - Antica Farmacia 1154"
        />
        <meta
          property="og:description"
          content="Scopri i nostri piatti raffinati e deliziosi, dal Tacos di Cochinita Pibil al Tuna Roll e al Maritozzo Salato. Gusta la nostra cucina che combina tradizione e innovazione."
        />
        <meta
          property="og:url"
          content="https://antica-farmacia.netlify.app/ristorante"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Antica Farmacia 1154" />
      </Helmet>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-center text-3xl mb-7 mt-5 page-title subpixel-antialiased"
      >
        I nostri piatti
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8"
      >
        {/* Piatto #1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-lg overflow-hidden mx-5 my-3 flex flex-col lg:flex-col items-center justify-center"
        >
          <div className="flex items-center mb-4 ">
            <motion.h2
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              Tacos di Cochinita Pilbil
            </motion.h2>
          </div>
          <div className="p-4 text-center lg:text-left flex-1">
            <p className="text-white mb-4 text-justify lg:h-28 xl:h-48 cocktail-description subpixel-antialiased">
              I{" "}
              <span className="text-highlight subpixel-antialiased">
                Tacos di Cochinita Pibil
              </span>{" "}
              sono un piatto tipico della cucina messicana, originario della
              regione dello Yucatán. Consistono in tortillas di mais ripiene di
              maiale marinato con achiote, arancia amara e spezie, cotto
              lentamente fino a diventare tenero e succulento. Vengono serviti
              con cipolle rosse marinate, lime e salsa piccante, offrendo
              un'esplosione di sapori vibranti e autentici.
            </p>
            <div className="flex flex-row gap-3 mb-3 xl:mb-0">
              <img
                src={hot_food_icon}
                alt="Icona che indica cibo caldo"
                className="w-7 h-7"
              />
            </div>
            <details className="xl:mt-7">
              <summary className="text-lg font-medium text-white text-justify cursor-pointer subpixel-antialiased">
                Ingredienti
              </summary>
              <p className="pt-5 pb-5 text-base font-medium text-yellow-50 text-justify subpixel-antialiased">
                Tortillas di mais, purè di avocado, stracotto di maiale,
                achiote, cipolle marinate
              </p>
            </details>
            <p className="mt-5 prezzo text-white text-justify subpixel-antialiased">
              Prezzo:{" "}
              <span className="subpixel-antialiased text-highlight">7€</span>
            </p>
          </div>
        </motion.div>

        {/* Piatto #2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="rounded-lg overflow-hidden mx-5 my-3 flex flex-col lg:flex-col items-center justify-center"
        >
          <div className="flex items-center mb-4 ">
            <motion.h2
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              Tuna Roll
            </motion.h2>
          </div>
          <div className="p-4 text-center lg:text-left flex-1">
            <p className="text-white mb-4 text-justify lg:h-28 xl:h-48 cocktail-description subpixel-antialiased">
              Il{" "}
              <span className="text-highlight subpixel-antialiased">
                Tuna Roll
              </span>{" "}
              è un classico della cucina giapponese, tipicamente preparato come
              sushi. Consiste in un rotolo di riso condito con aceto, ripieno di
              tonno fresco e avvolto in alga nori. A volte include anche avocado
              o cetriolo per aggiungere croccantezza e freschezza. Viene
              tagliato in pezzi piccoli e servito con salsa di soia, wasabi e
              zenzero marinato, offrendo un'esperienza di sapori delicati e ben
              bilanciati.
            </p>
            <div className="flex flex-row gap-3 mb-3 xl:mb-0">
              <img
                src={bio_food_icon}
                alt="Icona che indica cibo biologico"
                className="w-7 h-7"
              />
              <img
                src={cold_food_icon}
                alt="Icona che indica cibo freddo"
                className="w-7 h-7"
              />
            </div>
            <details className="xl:mt-7">
              <summary className="text-lg font-medium text-white text-justify cursor-pointer subpixel-antialiased">
                Ingredienti
              </summary>
              <p className="pt-5 pb-5 text-base font-medium text-yellow-50 text-justify subpixel-antialiased">
                Panino soffice al burro con Tartare di tonno rosso del
                mediterraneo, sriracha mayo e lattuga croccante
              </p>
            </details>
            <p className="mt-5 prezzo text-white text-justify subpixel-antialiased">
              Prezzo:{" "}
              <span className="subpixel-antialiased text-highlight">15€</span>
            </p>
          </div>
        </motion.div>

        {/* Piatto #3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="rounded-lg overflow-hidden mx-5 my-3 flex flex-col lg:flex-col items-center justify-center"
        >
          <div className="flex items-center mb-4 ">
            <motion.h2
              initial={{ opacity: 0, x: 500, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-2xl font-semibold mb-2 text-white cocktail-title antialiased ml-3 lg:ml-0"
            >
              Maritozzo salato
            </motion.h2>
          </div>
          <div className="p-4 text-center lg:text-left flex-1">
            <p className="text-white mb-4 text-justify lg:h-28 xl:h-48 cocktail-description subpixel-antialiased">
              Il{" "}
              <span className="text-highlight subpixel-antialiased">
                Maritozzo salato
              </span>{" "}
              è una variante del tradizionale dolce romano, trasformato in una
              sfiziosa proposta salata. Consiste in un soffice panino brioche
              farcito con ingredienti saporiti come salumi, formaggi, verdure
              grigliate, o pesce affumicato. Perfetto per un aperitivo o un
              pranzo leggero, il maritozzo salato combina la morbidezza e il
              gusto leggermente dolce della brioche con farciture ricche e
              gustose, offrendo un equilibrio irresistibile di sapori e
              consistenze.
            </p>
            <div className="flex flex-row gap-3 mb-3 xl:mb-0">
              <img
                src={hot_food_icon}
                alt="Icona che indica cibo caldo"
                className="w-7 h-7"
              />
              <img
                src={bio_food_icon}
                alt="Icona che indica cibo biologico"
                className="w-7 h-7"
              />
            </div>
            <details className="xl:mt-7">
              <summary className="text-lg font-medium text-white text-justify cursor-pointer subpixel-antialiased">
                Ingredienti
              </summary>
              <p className="pt-5 pb-5 text-base font-medium text-yellow-50 text-justify subpixel-antialiased">
                Maritozzo salato al cacao, coda alla vaccinara, crema cacio e
                pepe, maionese al sedano
              </p>
            </details>
            <p className="mt-5 prezzo text-white text-justify subpixel-antialiased">
              Prezzo:{" "}
              <span className="subpixel-antialiased text-highlight">10€</span>
            </p>
          </div>
        </motion.div>

        {/* Repeat this block for each dishes */}
      </motion.div>
    </main>
  );
};

export default RistoranteMenu;
