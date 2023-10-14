import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import store from "../../config/storage/IonicStorage";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [user_id, setUserId] = useState<string>("");

  useEffect(() => {
    store.get("user_id").then((res) => {
      setUserId(res);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>User ID: {user_id}</p>
    </div>
  );
};

export default Home;
