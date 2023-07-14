import React from "react";
import style from "./style.module.css";

export default function Imagens() {
  return (
    <>
      <div className={style.sub_container_imagens1}>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem1.jpeg`}
            alt=""
          />
        </div>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem2.jpeg`}
            alt=""
          />
        </div>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem3.jpeg`}
            alt=""
          />
        </div>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem4.jpeg`}
            alt=""
          />
        </div>
      </div>

      <div className={style.sub_container_imagens2}>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem5.jpeg`}
            alt=""
          />
        </div>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem6.jpeg`}
            alt=""
          />
        </div>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem7.jpeg`}
            alt=""
          />
        </div>
        <div className={style.imagens}>
          <img
            className={style.img}
            src={`${process.env.PUBLIC_URL}/assets/imagem8.jpeg`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
