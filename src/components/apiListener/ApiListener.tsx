import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { App, URLOpenListenerEvent } from "@capacitor/app";
type Props = {};

const ApiListener: React.FC<Props> = (props: Props) => {
  let history = useHistory();
  useEffect(() => {
    App.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      // Example url: https://moviebookingapp.vercel.app
      // slug: /home/ticket/movieId=1
      const slug = event.url.split(".app").pop(); // /home/ticket/movieId=1
      if (slug) {
        history.push(slug); // /home/ticket/movieId=1 => http://localhost:3000/home/ticket/movieId=1
      }
    });
  }, []);
  return null;
};

export default ApiListener;
