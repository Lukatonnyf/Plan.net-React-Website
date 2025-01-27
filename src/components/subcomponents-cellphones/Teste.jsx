/* eslint-disable react/prop-types */
// import CardAddition from "./CardAddition";
// import Card from "./Card";
// import CardAddition from "./CardAddition";
import { AditionActivity } from "../style"; // CA
import Card from "./Card";
// import Card from "./Card";

export default function Teste({ activity }) {
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

/**
 *   const CadastrarAtividade = ({ onClick }) => {
    return (
      <>
        <AditionActivity onClick={onClick}>Cadastrar Atividade</AditionActivity>
      </>
    );
    Console.log("ta indo");
  };

  return (
    <>
      <CadastrarAtividade></CadastrarAtividade>
      {activity != "" ? <Card>a</Card> : <p>Ta indo n</p>}
    </>
 */
