import { ContainerLogin } from "./loggin-style";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useLayoutEffect } from "react";
import gsap from "gsap";

// import { IoIosPlanet } from "react-icons/io";

export default function Loggin() {
  // S23 CINZA
  // file animation
  useLayoutEffect(() => {
    gsap.to(".user-picture", {
      duration: 2,
      y: 30,
      opacity: 1,
      delay: 2,
      scale: 1,
    });
  }, []);

  useLayoutEffect(() => {
    // BTN ANIMATION
    gsap.to(".btn-cadastrar", {
      duration: 2,
      y: -10,
      opacity: 1,
      delay: 0.5,
      scale: 1,
    });
  }, []);

  // ANIMATIONS INPUTS

  useLayoutEffect(() => {
    gsap.to(".input-name", {
      duration: 2,
      y: 0,
      opacity: 1,
      delay: 0.5,
      scale: 1,
    });
  }, []);

  // INPUT PASSWORD
  useLayoutEffect(() => {
    gsap.to(".input-password", {
      duration: 2,
      y: 0,
      opacity: 1,
      delay: 1,
      scale: 1,
      filter: "blur(0px)",
    });
  }, []);

  useLayoutEffect(() => {
    gsap.to(".input-email", {
      duration: 2,
      y: 0,
      opacity: 1,
      delay: 1.5,
      scale: 1,
      filter: "blur(0px)",
    });
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const accountUser = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      senha: password,
    };

    console.log(user);
  };

  return (
    <>
      <ContainerLogin>
        <form>
          {/* INPUT TYPE FILE ( FOTO DE PERFIL ) */}
          <label className="user-picture" htmlFor="img">
            <IoIosAdd />
          </label>
          <input type="file" name="img" id="img" />

          {/* INPUT NAME */}
          <input
            className="input-name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Digite seu nome"
            autoComplete="off"
            // value={activity}
            minLength={3}
          />

          {/* INPUT SENHA */}
          <input
            name="password"
            className="input-password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Crie uma senha "
            autoComplete="off"
            // value={activity}
            minLength={3}
          />

          {/* CONFIRM PASSWORD */}
          <input
            name="email"
            className="input-email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Digite seu email"
            autoComplete="off"
            // value={activity}
            minLength={3}
          />

          <button type="submit" className="btn-cadastrar" onClick={accountUser}>
            Cadastrar Usuário
          </button>
        </form>
      </ContainerLogin>
    </>
  );
}
