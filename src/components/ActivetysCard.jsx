// IMPORT LIBS
// import { useLayoutEffect } from "react";
// import { gsap } from "gsap";
import { useState } from "react";

// IMPORT ICONS
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";

//     IMPORTS COMPONENTS
/* eslint-disable react/prop-types */
import { AditionActivity } from "./style"; // CARD QUE VAI APARECER
import { AdicionarTarefa } from "./style";
import { Container } from "./style";
import { CardListen } from "./style";
import Form from "./Form";
import TodoItens from "./TodoItens";

export default function ActivetyCard() {
  // ANIMATIONS
  // useLayoutEffect(() => {
  //   gsap.to(".btn-adicionar-tarefa", {
  //     duration: 2,
  //     y: 0,
  //     opacity: 1,
  //     delay: 1.5,
  //     scale: 1,
  //     filter: "blur(0px)",
  //   });
  // }, []);

  // // LOGICA
  const CadastrarAtividade = ({ onToggle }) => {
    return (
      <>
        <AditionActivity onClick={onToggle}>
          Adicionar Atividade
        </AditionActivity>
      </>
    );
  };

  const [isVisible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <Container>
        <h1>Atividades</h1>
        <CadastrarAtividade onToggle={handleToggle} />
        {isVisible && (
          <AdicionarTarefa>
            <div>
              <button className="fechar-btn" onClick={handleToggle}>
                X
              </button>

              <h4>Atividades</h4>
            </div>

            <Form /*onToggle={handleToggle}*/ addTodo={addTodo} />
          </AdicionarTarefa>
        )}

        {/* Card tarefas */}
        <CardListen>
          {todos.map((todo, index) => (
            <>
              <TodoItens index={index} todo={todo} />
            </>
          ))}
        </CardListen>
      </Container>
    </>
  );
}
