import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { homeOutline, logInOutline } from "ionicons/icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Email dan password wajib diisi.");
    } else {
      localStorage.setItem("rumahkita_user", email.trim().split("@")[0]);
      setError("");
      navigate("/dashboard");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eff6ff",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "350px",
          padding: "24px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 10px #ddd",
        }}
      >
        <h1 style={{ color: "#2563eb", textAlign: "center" }}>
          <IonIcon icon={homeOutline} /> RumahKita
        </h1>

        <h2>Selamat Datang</h2>
        <p>Masuk untuk melihat pilihan rumah impianmu.</p>

        <label>Email atau nama pengguna</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email"
          style={{
            width: "100%",
            padding: "12px",
            margin: "8px 0 16px",
            boxSizing: "border-box",
          }}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          style={{
            width: "100%",
            padding: "12px",
            margin: "8px 0 16px",
            boxSizing: "border-box",
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <IonIcon icon={logInOutline} /> Masuk
        </button>
      </form>
    </main>
  );
}
