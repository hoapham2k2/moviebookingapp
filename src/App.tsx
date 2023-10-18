import { Redirect, Route, RouteProps } from "react-router-dom";
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
import TicketsListPage from "./pages/tickets-list/TicketsList";
import WishListPage from "./pages/wishlist/WishList";
import ProfilePage from "./pages/profile/Profile";
import MovieDetailPage from "./pages/movie-detail/MovieDetail";
import TicketBookingPage from "./pages/ticket-booking/TicketBooking";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPassword";
import MuiProvider from "./providers/MuiProvider";
import Payment from "./pages/payments/Payment";
import PaymentStatus from "./pages/payments/paymentPages/PaymentStatus";

setupIonicReact();

const App = () => {
  const [access_token, setAccessToken] = useState<string>("");

  useEffect(() => {
    store.get("token").then((res: any) => {
      setAccessToken(res);
    });
  }, []);

  return (
    <MuiProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <AppLayout>
              <Route path={"/home"} component={() => <Home />} exact={true} />
              <Route
                path={"/tickets-list"}
                component={() => <TicketsListPage />}
                exact={true}
              />
              <Route
                path={"/wishlist"}
                component={() => <WishListPage />}
                exact={true}
              />
              <Route
                path={"/profile"}
                component={() => <ProfilePage />}
                exact={true}
              />
              <Route
                path={"/home/:id"}
                component={() => <MovieDetailPage />}
                exact={true}
              />
              <Route
                path={"/home/ticket/movieId=:id"}
                component={() => <TicketBookingPage />}
                exact={true}
              />
            </AppLayout>
            <Route path="/page/:name" component={AppLayout} exact={true} />
            <Route path="/login" component={LoginPage} exact={true} />
            <Route path="/register" component={RegisterPage} exact={true} />
            <Route
              path="/forgot-password"
              component={ForgotPasswordPage}
              exact={true}
            />
            <Route path="/payment" component={() => <Payment />} exact={true} />
            <Route
              path="/paymentStatus"
              component={() => <PaymentStatus />}
              exact={true}
            />
            <Route exact path="/">
              {access_token ? <Redirect to="/home" /> : <LoginPage />}
            </Route>
            {/* route còn lại sẽ redirect sang Errorpage */}
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </MuiProvider>
  );
};

export default App;
