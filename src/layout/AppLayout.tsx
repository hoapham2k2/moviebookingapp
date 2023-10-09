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
      <AppHeader />
      <IonContent fullscreen>
        <div className="w-full h-full">{props.children}</div>
        <AppFooter />
      </IonContent>
    </IonPage>
  );
};

export default AppLayout;
