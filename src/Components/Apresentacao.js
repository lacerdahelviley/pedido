import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css"

export default function Apresentacao() {
    const getGreeting = () => {
        const currentHour = new Date().getHours();
    
        if (currentHour >= 6 && currentHour < 12) {
          return 'bom dia';
        } else if (currentHour >= 12 && currentHour < 18) {
          return 'boa tarde';
        } else {
          return 'boa noite';
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
          da experiência maravilhosa que ambos estamos vivendo. Enfim, falei
          bastante para alguém que pretendia apenas fazer uma pergunta...
        </p>
        <button className={style.link}>
          <Link to="/pedido">continue lendo..</Link>
        </button>
      </div>
    </div>
  );
}
