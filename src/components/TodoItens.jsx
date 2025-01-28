/* eslint-disable react/prop-types */
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function TodoItens({ todo, index }) {
  return (
    <>
      <ul>
        <li key={index}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexDirection: "row",
            }}
          >
            <IoIosCheckmarkCircleOutline />
            {todo.text}
          </p>
          <span>{todo.time}</span>
        </li>
      </ul>
    </>
  );
}
