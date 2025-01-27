// IMPORT LIBS
// import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useState, useRef } from "react";

// IMPORT ICONS
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

//     IMPORTS COMPONENTS
/* eslint-disable react/prop-types */
import { AditionActivity } from "./style"; // CARD QUE VAI APARECER
import { AdicionarTarefa } from "./style";
import { Container } from "./style";
import { CardListen } from "./style";
import BtnAddAtividade from "./subcomponents-cellphones/BtnAddAtividade";

export default function ActivetyCard() {
  // ANIMATIONS

  // LOGICA
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
  const boxRef = useRef(null);

  const handleToggle = () => {
    setVisible((prev) => !prev);

    gsap.to(boxRef.current, {
      scale: 1.5,
      duration: 1,
    });
  };

  // CODIGO DO INPUT
  const [activity, setActivity] = useState("");
  const [activitiesList, setActivitiesList] = useState([]);

  const [time, setTime] = useState("");

  const addActivityToMainComponent = () => {
    if (activity != "") {
      setActivitiesList((prevActivities) => [...prevActivities, activity]);
      setActivity("");
    }
    handleToggle();
  };

  // };

  const handleText = (e) => {
    setActivity(e.target.value);
  };

  const handleHoraChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // INPUT TYPE TIME ( HORA )

  // JOGAR O VALOR DO ACTIVITY E O HORARIO NO MESMO OBJETO

  // const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <>
      <Container>
        {/* CODIGO CORRETO ABAIXO */}
        <h1>Atividades</h1>
        <CadastrarAtividade onToggle={handleToggle}></CadastrarAtividade>

        {isVisible && (
          <AdicionarTarefa ref={boxRef}>
            <form onSubmit={handleSubmit}>
              <input
                name="inpt-activity"
                onChange={handleText}
                type="text"
                placeholder="Nome da Atividade"
                value={activity}
              />
              <input type="date" name="date" id="" />
              {/* input pra time */}
              <input
                type="time"
                id="hora"
                value={time}
                onChange={handleHoraChange}
                className="custom-time-input"
              />
              {/* Passa a função addActivityToMainComponent para o Card */}
              <BtnAddAtividade
                // setTime={setTime}
                activity={activity}
                setTime={setTime}
                setActivity={setActivity}
                addActivityToMainComponent={addActivityToMainComponent}
              />
            </form>
          </AdicionarTarefa>
        )}

        <div>
          <CardListen>
            <ul>
              {activitiesList == "" ? (
                <h5
                  style={{
                    fontSize: "20px",
                    marginTop: "20%",
                  }}
                >
                  Adicione alguma atividade!
                </h5>
              ) : (
                activitiesList.map((activity, index) => (
                  <li key={index}>
                    <span>
                      <IoIosCheckmarkCircleOutline />
                      {activity}
                    </span>

                    <p>{time}</p>
                  </li>
                ))
              )}
            </ul>
          </CardListen>
        </div>
      </Container>
    </>
  );
}
