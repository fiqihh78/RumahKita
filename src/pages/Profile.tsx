import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { personCircleOutline, logOutOutline } from "ionicons/icons";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

export default function Profile() {
  const navigate = useNavigate();
  const user = localStorage.getItem("rumahkita_user") || "Pengguna";

  function logout() {
    localStorage.removeItem("rumahkita_user");
    navigate("/");
  }

  return (
    <div style={{ paddingBottom: "70px" }}>
      <Topbar title="Profil" />

      <main style={{ padding: "20px" }}>
        <section style={{ textAlign: "center", marginBottom: "24px" }}>
          <IonIcon icon={personCircleOutline} style={{ fontSize: "80px", color: "#2563eb" }} />
          <h2>{user}</h2>
          <p>Pengguna RumahKita</p>
        </section>

        <section
          style={{
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>Informasi Akun</h3>
          <p>
            Nama pengguna: <strong>{user}</strong>
          </p>
          <p>
            Aplikasi: <strong>RumahKita</strong>
          </p>
          <p>
            Status: <strong style={{ color: "green" }}>Aktif</strong>
          </p>
        </section>

        <button
          onClick={() => navigate("/dashboard", { replace: true })}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #2563eb",
            borderRadius: "8px",
            background: "white",
            color: "#2563eb",
          }}
        >
          Kembali ke Dashboard
        </button>

        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            background: "#dc2626",
            color: "white",
          }}
        >
          <IonIcon icon={logOutOutline} /> Keluar
        </button>
      </main>

      <Bottombar />
    </div>
  );
}
