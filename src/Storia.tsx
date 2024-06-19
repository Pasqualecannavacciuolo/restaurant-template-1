import top_image from "./assets/storia/1.webp";
import center_image from "./assets/storia/2.webp";
import bottom_image from "./assets/storia/3.webp";

const Storia = () => {
  return (
    <div className="bg-zinc-900 font-sans leading-normal tracking-normal min-h-screen flex items-center justify-center">
      <main className="p-8 rounded-lg shadow-md w-full max-w-4xl">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center text-white page-title">
            La nostra storia
          </h2>

          <div className="mb-6 text-center">
            <img
              src={top_image}
              alt="Palazzo Troisi"
              className="w-full h-64 object-cover rounded-lg mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
            />
            <p
              className="text-white text-lg mx-auto about-description text-justify"
              style={{ maxWidth: "600px" }}
            >
              Situata nel Palazzo Troisi, storico palazzo del 1800 costruito
              proprio nella piazza principale di Arienzo, cittadina della terra
              murata che ha origini nel 1154 e che rappresenta il nucleo più
              antico dell’attuale città, nei secoli oggetto di diverse
              dominazioni. Al piano terra di questo palazzo vi era la Farmacia
              Troisi, storica farmacia della Valle di Suessola, che trova la sua
              fine nel dopoguerra.
            </p>
          </div>

          <div className="mb-6 text-center">
            <img
              src={center_image}
              alt="Interno del locale"
              className="w-full h-64 object-cover rounded-lg mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
            />
            <p
              className="text-white text-lg mx-auto about-description text-justify"
              style={{ maxWidth: "600px" }}
            >
              E’ proprio qui che nel Giugno 2021 nasce Antica Farmacia 1154, un
              luogo di tendenza che abbina sempre più di frequente cocktail e
              food. Il locale nasce come mezzo di espressione dei fratelli
              Antonio e Giuseppe Carfora. Antonio, chef con un passato nelle
              cucine di Alain Ducasse a Londra, 4 anni alla Terrazza dell’Eden
              di Roma e 2 da Zaranda a Palma de Mallorca. Giuseppe, bartender
              con esperienze londinesi, formative in fatto di bere miscelato,
              tra le quali quella di head bartender al German Gymnasium. Il
              primo ed il secondo hanno unito le rispettive competenze aprendo
              un locale tutto loro.
            </p>
          </div>

          <div className="mb-6 text-center">
            <img
              src={bottom_image}
              alt="Cocktail e piatti"
              className="w-full h-64 object-cover rounded-lg mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
            />
            <p
              className="text-white text-lg mx-auto about-description text-justify"
              style={{ maxWidth: "600px" }}
            >
              Antica Farmacia 1154 offre una cucina autentica: piatti con
              influenze giapponesi, peruviane, spagnole e cinesi, ma soprattutto
              dai sapori mediterranei, con ingredienti stagionali e nostrani.
              Stessa cosa nel bere: la carta dei cocktail è ampia e offre
              diversi distillati provenienti da tutto il mondo, miscelati con
              attenzione e tecnica con ingredienti altrettanto nostrani e
              stagionali. Non manca una carta dei vini ben articolata e con
              attenzione soprattutto alla produzione regionale, poi al resto
              dell’Italia, alla Francia e agli champagne.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Storia;
