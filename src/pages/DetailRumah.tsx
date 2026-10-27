import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

export default function DetailRumah() {
  const location = useLocation();
  const navigate = useNavigate();

  const rumah = location.state?.rumah;

  return (
    <div style={{ paddingBottom: "80px", minHeight: "100vh" }}>
      <Topbar title="Detail Rumah" />

      <div style={{ padding: "16px" }}>
        {/* <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
          alt={rumah.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        /> */}

        <h2>{rumah.name}</h2>
        <p>Lokasi: {rumah.location}</p>
        <h2>Rp {rumah.price.toLocaleString("id-ID")}</h2>
        <p>Kamar tidur: {rumah.bedrooms}</p>
        <p>Kamar mandi: {rumah.bathrooms}</p>
        <p>Luas bangunan: {rumah.area} m²</p>
        <p>{rumah.description}</p>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Kembali ke Dashboard
        </button>
      </div>

      <Bottombar />
    </div>
  );
}
