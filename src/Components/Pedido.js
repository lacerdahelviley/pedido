import React, { useState } from "react";
import style from "./style.module.css";

export default function Pedido() {
  const [buttonPosition, setButtonPosition] = useState({
    left: "55%",
    top: "62%",
  });

  const handleButtonClick = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const buttonWidth = 100;
    const buttonHeight = 30;

    const maxLeft = windowWidth - buttonWidth;
    const maxTop = windowHeight - buttonHeight;

    const newLeft = Math.floor(Math.random() * maxLeft);
    const newTop = Math.floor(Math.random() * maxTop);

    setButtonPosition({ left: newLeft + "px", top: newTop + "px" });
  };

  const sucesso = () => {
    alert("Sucesso bebê, agora vamos zerar vários jogos e também a vida. Hehe")
  }

  return (
    <div className={style.container_pedido}>
      <div className={style.corpo_pedido}>
        <div className={style.container_titulo}>
          <p className={style.text}>Indo ao que realmente importa...</p>
        </div>
        <div className={style.pedido}>
          <img className={style.image} src={`${process.env.PUBLIC_URL}/assets/player.png`} alt="" />
          <h2>Você quer ser minha player 1?</h2>
        </div>
        <div className={style.container_botoes}>
            <button className={style.botao_aceito} onClick={sucesso}>
              Claro, com certeza que eu quero!!
            </button>
            <button
              style={{
                position: "absolute",
                ...buttonPosition,
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "30px",
                backgroundColor: "#ff0000",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                padding: "5px",
              }}
              onClick={handleButtonClick}
            >
              Sai pra lá, doido.
            </button>
          </div>
      </div>
    </div>
  );
}
