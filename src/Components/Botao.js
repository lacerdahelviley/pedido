import Button from "react-bootstrap/Button";

const Botao = (nome, variant) => {
  return (
    <>
      <Button variant={variant}>{nome}</Button>
    </>
  );
};

export default Botao;
