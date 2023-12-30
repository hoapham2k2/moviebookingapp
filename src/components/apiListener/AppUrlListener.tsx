import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { App, URLOpenListenerEvent } from "@capacitor/app";
import toast from "react-hot-toast";

const AppUrlListener: React.FC<any> = (props: React.PropsWithChildren<any>) => {
  let history = useHistory();

  console.log("AppUrlListener");

  useEffect(() => {
    /* 
    this is the url that will be opened by the app. It will trigger the appUrlOpen event, meaning that user clicked on a link that opened the app. (e.g. https://myapp.app/)
    */
    App.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      console.log("appUrlOpen", event);
      toast.success("appUrlOpen");
      const slug = event.url.split(".app").pop();
      if (slug) {
        history.push(slug);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });

    /*
    This is the url that will be opened by the app. It will trigger the appRestoredResult event, meaning that the app was opened by a url, and now the app is back to foreground.
    */
    App.addListener("appRestoredResult", (event: any) => {
      const slug = event.url.split(".app").pop();
      if (slug) {
        history.push(slug);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });

    // Call this to trigger the initial appUrlOpen event
    App.getLaunchUrl().then((url: any) => {
      if (url) {
        const slug = url.url.split(".app").pop();
        if (slug) {
          history.push(slug);
        }
      }
    });
  }, []);

  return <>{props?.children}</>;
};

export default AppUrlListener;
