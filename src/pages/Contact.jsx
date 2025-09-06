import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setSent(true);
        setError(null);
        form.current.reset();
      })
      .catch((err) => {
        setSent(false);
        setError("Une erreur est survenue, merci de réessayer.");
        console.error(err);
      });
  };

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
          <h2 className="text-2xl font-semibold">{t("contact.title")}</h2>
          <p>
            <strong>{t("contact.nom")} :</strong> Joly-Girods
          </p>
          <p>
            <strong>{t("contact.prenom")} :</strong> Noam
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a
              className="underline hover:text-[#888]"
              href="mailto:noam@example.com"
            >
              noamjoly2812@gmail.com
            </a>
          </p>
          <p>
            <strong>{t("contact.tel")} :</strong>{" "}
            <a
              className="underline hover:text-[#888]"
              href="tel:+33613593945"
            >
              +33 6 13 59 39 45
            </a>
          </p>
        </div>

        {/* Formulaire */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">
            {t("contact.message")}
          </h2>

          {/* Nom + Prénom sur une ligne */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="nom"
              placeholder={t("contact.nom")}
              required
              className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
            />
            <input
              type="text"
              name="prenom"
              placeholder={t("contact.prenom")}
              required
              className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
          />

          {/* Objet / title */}
          <input
            type="text"
            name="title"
            placeholder={t("contact.objet") || "Objet"}
            required
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder={t("contact.Votre_message")}
            rows="5"
            required
            className="w-full border-b-2 border-[#EDE8FF] p-2 outline-none focus:border-[#444444] bg-transparent resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#EDE8FF] hover:bg-[#d8d0ff] text-[#444444] px-6 py-2 rounded-full transition"
          >
            {t("contact.envoyer")}
          </button>

          {sent && <p className="text-green-600">{t("contact.merci")}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
