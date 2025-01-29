import UserProfileBar from "./UserProfileBar";
import { IoIosPlanet } from "react-icons/io";
// import { useState } from "react";
// import UserTodo from "./userTodo";

export default function Header() {
  // const [testando, setTestando] = useState([]);

  // const nameUser = (user) => {
  //   setTestando([...testando, user]);
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          height: "50%",
          width: "100%",
          padding: "5px 20px",
          color: "#efefef",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            height: "50px",
            width: "100%",
            padding: "5px 20px",
            color: "#efefef",
          }}
        >
          <IoIosPlanet style={{ fontSize: "50px" }} />
          <h1 style={{ fontFamily: " Inter, serif" }}>Plan.net</h1>
        </div>
        <UserProfileBar />

        {/* {testando.map((testando, index) => (
          <>
            <UserTodo key={index} todo={testando} />
          </>
        ))} */}
      </div>
    </>
  );
}
