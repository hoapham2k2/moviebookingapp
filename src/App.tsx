import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import { useEffect, useState } from "react";
import store from "./config/storage/IonicStorage";

setupIonicReact();

const App = () => {
  const [access_token, setAccessToken] = useState<string>("");

  useEffect(() => {
    store.get("token").then((res) => {
      setAccessToken(res);
    });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path={"/home"}
            component={() => (
              <AppLayout>
                <Home />
              </AppLayout>
            )}
            exact={true}
          />
          <Route path="/page/:name" component={AppLayout} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/register" component={RegisterPage} exact={true} />
          <Route exact path="/">
            {access_token ? <Redirect to="/home" /> : <LoginPage />}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
