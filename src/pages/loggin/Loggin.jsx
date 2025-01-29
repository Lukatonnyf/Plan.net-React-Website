/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { ContainerLogin } from "./loggin-style";
import { useState, useEffect, useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import UserProfileBar from "../header/UserProfileBar";

// import { IoIosPlanet } from "react-icons/io";
import api from "../../api/api";
export default function Loggin() {
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

  //                               LÓGICA
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  const [usuarios, setUsuarios] = useState([]);

  async function getUsers() {
    const usersFromApi = await api.get("/user");
    setUsuarios(usersFromApi.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function createtUsers(event) {
    event.preventDefault();

    await api.post("/user", {
      email: inputEmail.current.value,
      name: inputName.current.value,
      password: inputPassword.current.value,
    });

    getUsers();
  }

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
            ref={inputName}
            type="text"
            placeholder="Digite seu nome"
            autoComplete="off"
            required
            minLength={3}
          />

          {/* INPUT SENHA */}
          <input
            name="password"
            className="input-password"
            ref={inputPassword}
            type="password"
            placeholder="Crie uma senha "
            autoComplete="off"
            required
            minLength={3}
          />

          {/* CONFIRM PASSWORD */}
          <input
            name="email"
            className="input-email"
            ref={inputEmail}
            type="email"
            placeholder="Digite seu email"
            autoComplete="off"
            required
            minLength={3}
          />

          <button
            type="submit"
            className="btn-cadastrar"
            onClick={createtUsers}
          >
            <Link to={"/"}>Cadastrar Usuário</Link>
          </button>
        </form>
      </ContainerLogin>

      <UserProfileBar user={usuarios[0]} />
    </>
  );
}

// PASSAR O NAME DO STATE USUARIO PARA O USEPROFILEBAR

// pra rodar o backend Tenho que dar um
//  IUR NA PASTA API COM :
// cd src
// cd api
// e dar o comando : node --watch server.js

// pra fazer o axios rodar tenho que dar o comando :
// npx prisma studio
