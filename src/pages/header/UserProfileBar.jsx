/* eslint-disable react/prop-types */
import UserPicture from "../../assets/default-avatar.jpg";
import { Link } from "react-router-dom";

export default function UserProfileBar({ usuarios }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          height: "100px",
          width: "100%",
          padding: "5px 20px",
          color: "#efefef",
        }}
      >
        <img
          src={UserPicture}
          alt="teste"
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            border: "1px solid #a9a9a9",
          }}
        />
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "Inter, serif",
            fontWeight: "700",
          }}
        >
          Olá!{" "}
          <span style={{ fontFamily: "Inter, serif", fontWeight: "300" }}>
            Olá {usuarios}
          </span>
        </p>
        <button
          style={{
            padding: "0px",
            fontWeight: "900",
            borderRadius: "5px",
            color: "#f9fcff",
            background: "#782cd9",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#DBDBDB" }}
            to="/login"
          >
            Button teste
          </Link>
        </button>
      </div>
    </>
  );
}
