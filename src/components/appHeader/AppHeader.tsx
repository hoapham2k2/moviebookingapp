import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

type Props = {};

const AppHeader = (props: Props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>This is header</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
