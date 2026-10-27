import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import CardRumah from "../components/CardRumah";

export default function Dashboard() {
  const [dataRumah, setDataRumah] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://api-inventaris.de.deplexo.com/rumah")
      .then((response) => setDataRumah(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ paddingBottom: "70px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Topbar title="RumahKita" />

      <h2 style={{ margin: "16px" }}>Daftar Rumah</h2>

      {dataRumah.map((rumah) => (
        <CardRumah key={rumah.id} rumah={rumah} />
      ))}

      <Bottombar />
    </div>
  );
}
