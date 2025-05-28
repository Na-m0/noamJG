import React from "react";

const Contact = () => {
  return (
    <div className="relative p-[10%] pt-28 pb-20">

      {/* Titre */}
      <div className="home-parent mb-20 relative z-10">
        <div className="home">Contact</div>
        <div className="home1">Contact</div>
        <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12">
        {/* Infos perso */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Mes informations</h2>
          <p><strong>Nom :</strong> Joly-Girods</p>
          <p><strong>Prénom :</strong> Noam</p>
          <p><strong>Email :</strong> <a className="underline hover:text-[#888]" href="mailto:noam@example.com">noam@example.com</a></p>
          <p><strong>Téléphone :</strong> <a className="underline hover:text-[#888]" href="tel:+33612345678">+33 6 12 34 56 78</a></p>
        </div>

        {/* Formulaire */}
        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">M'envoyer un message</h2>
          <input
            type="text"
            placeholder="Nom"
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
          />
          <input
            type="text"
            placeholder="Prénom"
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
          />
          <textarea
            placeholder="Votre message..."
            rows="5"
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#EDE8FF] hover:bg-[#d8d0ff] text-[#444444] px-6 py-2 rounded-full transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
