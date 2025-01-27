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
          src=""
          alt="teste"
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            border: "1px solid #a9a9a9",
          }}
        />
        <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          Olá!
          <span style={{ fontFamily: " Inter, serif" }}>User Name sla oq</span>
        </p>
      </div>
    </>
  );
}
