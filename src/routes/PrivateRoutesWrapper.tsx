import React from "react";
import { StorageGetItem } from "../config/storage/IonicStorage";
import { useHistory } from "react-router";
import { CURRENT_USER } from "../utils/SharedValues";


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: this below component is used to check the authentication of the user, if the user is authenticated then we are redirecting the user to the home page, else we are redirecting the user to the login page. We wrapped this component in the AppLayout component
  </summary>
*/

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
