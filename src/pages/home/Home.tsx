import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import store from "../../config/storage/IonicStorage";
import { useEffect, useState } from "react";
import HeaderSection from "./components/header-section/HeaderSection";
import PreviewSection from "./components/preview-section/PreviewSection";
const Home: React.FC = () => {
  const [user_id, setUserId] = useState<string>("");

  useEffect(() => {
    store.get("user_id").then((res: any) => {
      setUserId(res);
    });
  }, []);

  return (
    <div className="w-full h-full">
      <HeaderSection />
      <div className="h-full w-full px-4 py-2 flex flex-col gap-4">
        <PreviewSection name="New Releases" />
        <PreviewSection name="Popular in cinemas" />
        <PreviewSection name="Recommended for you" />
      </div>
    </div>
  );
};

export default Home;
