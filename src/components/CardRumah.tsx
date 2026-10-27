import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { locationOutline, bedOutline, waterOutline, resizeOutline } from "ionicons/icons";

const CardRumah = (props: any) => {
  const navigate = useNavigate();

  return (
    <article
      style={{
        margin: "16px",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px #ddd",
        background: "white",
      }}
    >
      <p>
        <IonIcon icon={locationOutline} /> {props.rumah.location}
      </p>

      <h3>{props.rumah.name}</h3>

      <h3>Rp {props.rumah.price.toLocaleString("id-ID")}</h3>

      <p>
        <IonIcon icon={bedOutline} /> {props.rumah.bedrooms} KT <IonIcon icon={waterOutline} /> {props.rumah.bathrooms} KM <IonIcon icon={resizeOutline} /> {props.rumah.area} m²
      </p>

      <button
        onClick={() =>
          navigate("/rumah", {
            state: {
              rumah: props.rumah,
            },
          })
        }
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
        Lihat Detail
      </button>
    </article>
  );
};

export default CardRumah;
