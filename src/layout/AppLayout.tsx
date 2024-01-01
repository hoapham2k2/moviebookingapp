import React from "react";
import AppFooter from "../components/appFooter/AppFooter";
import AppHeader from "../components/appHeader/AppHeader";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

type Props = {
  children: React.ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <IonPage>
      <IonContent>
        <div className="w-full h-full">{props.children}</div>
      </IonContent>
      <AppFooter />
    </IonPage>
  );
};

export default AppLayout;
