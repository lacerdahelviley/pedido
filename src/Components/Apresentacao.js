import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Imagens from "./Imagens";

export default function Apresentacao() {
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "boa tarde";
    } else {
      return "boa noite";
    }
  };
  return (
    <div className={style.container_apresentacao}>
      <div className={style.corpo_apresentacao}>
        <h3 className={style.title}>Oi, lua da minha vida, {getGreeting()}!</h3>
        <p className={style.text}>
          Bom, acredito que já expressei tudo o que queria dizer sobre o que
          sinto por você. É uma sensação única, onde posso ser eu mesmo sem
          preocupações. Você tem se mostrado incrível, é difícil até explicar.
          Tenho a sensação de que já te conheço há muito tempo. Como você mesma
          disse, chega a ser "bizarro", mas vejo isso como um bom sinal.
        </p>
        <p className={style.text}>
          Gosto de como me perco no seu olhar e sorriso, dos abraços que nos
          envolvem, do sabor maravilhoso dos seus beijos e, principalmente, de
          como nos damos bem. Acredito que isso não se trata de tempo, mas sim
          da experiência maravilhosa que ambos estamos vivendo.
        </p>
        <p className={style.text}>
          Parafraseando Carl Segan, "Diante da vastidão do tempo e da imensidão
          do universo, é um imenso prazer para mim dividir um planeta e uma
          época com você."
        </p>
        <button className={style.link}>
          <Link to="/pedido">continue lendo...</Link>
        </button>
        <br />
        <br />
        <iframe
          className={style.iframe}
          src="https://www.youtube.com/embed/rjAx8aae5pY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className={style.container_imagens}>
        <Imagens />
      </div>
    </div>
  );
}
