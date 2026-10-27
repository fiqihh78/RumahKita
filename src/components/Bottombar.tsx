import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { homeOutline, personOutline } from "ionicons/icons";

const Bottombar = (props: any) => {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        background: "white",
        borderTop: "1px solid #ddd",
      }}
    >
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          color: isActive ? "#2563eb" : "#777",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <IonIcon icon={homeOutline} size="large" />
        <small>Beranda</small>
      </NavLink>

      <NavLink
        to="/profil"
        style={({ isActive }) => ({
          color: isActive ? "#2563eb" : "#777",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <IonIcon icon={personOutline} size="large" />
        <small>Profil</small>
      </NavLink>
    </nav>
  );
};

export default Bottombar;
