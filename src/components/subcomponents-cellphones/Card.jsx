/* eslint-disable react/prop-types */

export default function Card({ addActivityToMainComponent }) {
  return (
    <>
      <div>
        {/* <p>{activity || "Nenhuma atividade selecionada"}</p> */}

        {/* Quando o botão for clicado, a função addActivityToMainComponent será chamada */}
        <button onClick={addActivityToMainComponent}>
          Adicionar Atividade
        </button>
      </div>
    </>
  );
}
