import React from "react";
import store, { StorageGetItem } from "../config/storage/IonicStorage";
import { Redirect, Route, useHistory } from "react-router";
import LoginPage from "../pages/login/LoginPage";
import AppLayout from "../layout/AppLayout";
import { CURRENT_USER } from "../utils/SharedValues";
import { IonRedirect } from "@ionic/react";

type Props = {
  route: string;
  children?: React.ReactNode;
};

const PrivateRoutesWrapper = (props: Props) => {
  const router = useHistory();
  React.useEffect(() => {
    const checkAuth = async () => {
      const user = await StorageGetItem(CURRENT_USER);
      if (user) {
        router.push(props.route);
      } else {
        router.push("/login");
      }
    };
    checkAuth();
  }, []);

  return <>{props.children}</>;
};

export default PrivateRoutesWrapper;
