import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { homeOutline, personOutline } from "ionicons/icons";

const Topbar = (props: any) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("rumahkita_user") || "Pengguna";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        background: "white",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link
        to="/dashboard"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#2563eb",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <IonIcon icon={homeOutline} />
        {props.title || "RumahKita"}
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span>Hai, {user}</span>

        <button
          onClick={() => navigate("/profil")}
          aria-label="Profil"
          style={{
            border: "none",
            background: "transparent",
            color: "#2563eb",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          <IonIcon icon={personOutline} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
