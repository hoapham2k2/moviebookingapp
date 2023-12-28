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
import LoginPage from "./pages/login/LoginPage";
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
import ReactGA from "react-ga4";
import ApiListener from "./components/apiListener/ApiListener";
import PrivateRoutesWrapper from "./routes/PrivateRoutesWrapper";
import { ROUTES } from "./utils/SharedValues";
import UpdatePassword from "./pages/forgot-password/UpdatePassword";
import React from "react";
import supabase from "./config/supabase/supabase";
import ReduxProvider from "./components/reduxStore/ReduxProvider";
import { Notice } from "./features/notices/noticeSlice";
import { useDispatch } from "react-redux";


setupIonicReact();

// export const GetPaymentUrl = async (orderId: string) => {
//   const urlString = await vnpayInstance.buildPaymentUrl({
//     vnp_Amount: 100000, // amount in VND
//     vnp_IpAddr: "192.168.1.1", // user ip address
//     vnp_TxnRef: "111111", // ma hoa don
//     vnp_OrderInfo: `Thanh toan cho ma GD: `,
//   });

//   return urlString;
// };
const App = () => {
  const [mySession, setMySession] = useState<any>({});

  ReactGA.initialize("G-ELBET3E24P");
  ReactGA.send({
    hitType: "pageview",
    page: "/home",
    title: "Custom Title",
  });

  useEffect(() => {
    store.get("mySession").then((res: any) => {
      setMySession(res);
    });
  }, []);

  return (
    <ReduxProvider>
      <MuiProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <AppLayout>
                <Route
                  path={ROUTES.HOME}
                  component={() => (
                    <PrivateRoutesWrapper route={ROUTES.HOME}>
                      <Home />
                    </PrivateRoutesWrapper>
                  )}
                  exact={true}
                />
                <Route
                  path={ROUTES.TICKETS_LIST}
                  component={() => (
                    <PrivateRoutesWrapper route={ROUTES.TICKETS_LIST}>
                      <TicketsListPage />
                    </PrivateRoutesWrapper>
                  )}
                  exact={true}
                />
                <Route
                  path={ROUTES.WISH_LIST}
                  component={() => (
                    <PrivateRoutesWrapper route={ROUTES.WISH_LIST}>
                      <WishListPage />
                    </PrivateRoutesWrapper>
                  )}
                  exact={true}
                />
                <Route
                  path={ROUTES.PROFILE}
                  component={() => (
                    <PrivateRoutesWrapper route={ROUTES.PROFILE}>
                      <ProfilePage />
                    </PrivateRoutesWrapper>
                  )}
                  exact={true}
                />
                <Route
                  path={ROUTES.HOME_DETAIL}
                  component={() => (
                    <PrivateRoutesWrapper route={ROUTES.HOME_DETAIL}>
                      <MovieDetailPage />
                    </PrivateRoutesWrapper>
                  )}
                  exact={true}
                />
                <Route
                  path={ROUTES.TICKET_DETAIL}
                  component={() => (
                    <PrivateRoutesWrapper route={ROUTES.TICKET_DETAIL}>
                      <TicketBookingPage />
                    </PrivateRoutesWrapper>
                  )}
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
              <Route
                path={ROUTES.UPDATE_PASSWORD}
                component={UpdatePassword}
                exact={true}
              />
              <Route
                path="/payment"
                component={() => <Payment />}
                exact={true}
              />
              <Route
                path="/paymentStatus"
                component={() => <PaymentStatus />}
                exact={true}
              />
              <Route exact path="/">
                {mySession ? <Redirect to="/home" /> : <LoginPage />}
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </MuiProvider>
    </ReduxProvider>
  );
};

export default App;
