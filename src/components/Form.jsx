/* eslint-disable react/prop-types */
import { useState } from "react";
// import { AditionActivity } from "./style";

export default function Form({ addTodo /* onToggle*/ }) {
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState(0);

  const sendTodo = (e) => {
    e.preventDefault();
    const obj = {
      id: id,
      text: activity,
      time: time,
    };

    setId(id + 1);
    addTodo(obj);
    setActivity("");
    setTime("");
  };

  return (
    <>
      <form onSubmit={sendTodo}>
        <input
          name="inpt-activity"
          onChange={(e) => setActivity(e.target.value)}
          type="text"
          placeholder="Nome da Atividade"
          autoComplete="off"
          value={activity}
          minLength={3}
        />
        {/* INPUT TYPE DATA */}
        <input type="date" name="date" id="" />
        {/* INPUT TYPE TIME*/}
        <input
          autoComplete="off"
          type="time"
          placeholder="Escolha o horario"
          onChange={(e) => setTime(e.target.value)}
          className="custom-time-input"
        />

        <button type="submit">Cadastrar Atividade </button>
      </form>
    </>
  );
}
