import UserPicture from "../../assets/default-avatar.jpg";

export default function UserProfileBar() {
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
            fontFamily: " Inter, serif",
            fontWeight: "700",
          }}
        >
          Ola!
          <span style={{ fontFamily: " Inter, serif", fontWeight: "300" }}>
            User Name{" "}
          </span>
        </p>
      </div>
    </>
  );
}
