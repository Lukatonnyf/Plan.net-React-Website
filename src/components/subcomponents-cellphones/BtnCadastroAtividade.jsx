/* eslint-disable react/prop-types */
// import CardAddition from "./CardAddition";
// import Card from "./Card";
// import CardAddition from "./CardAddition";
import { AditionActivity } from "../style"; // CA
import Card from "./BtnAddAtividade";
// import Card from "./Card";

export default function BtnCadastroAtividade({ activity }) {
  const cadastroDetividade = () => {
    <Card activity={activity} />;
  };

  return (
    <>
      <AditionActivity onClick={cadastroDetividade}>
        Cadastrar Atividade
      </AditionActivity>
    </>
  );
}
