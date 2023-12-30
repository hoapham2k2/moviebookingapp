import { IonFooter, IonToolbar } from "@ionic/react";
import { AiFillHome } from "react-icons/ai";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";

type Props = {};

const AppFooter = (props: Props) => {
  const router = useHistory();
  const listNavItems = [
    {
    title: "Home",
      url: "/home",
      icon: <AiFillHome />,
    },
    {
      title: "Tickets",
      url: "/tickets-list",
      icon: <BsFillTicketPerforatedFill />,
    },
    {
      title: "Wishlist",
      url: "/wishlist",
      icon: <FaHeart />,
     
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <FaUserAlt />,
    },
  ];

  return (
    <IonFooter>
      <IonToolbar>
        <div className="w-full flex justify-around">
          {listNavItems.map((item, index) => {
            return (
              <div className="text-center" key={index}>
                <NavLink
                  activeClassName="text-rose-400"
                  to={item.url}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-xs">{item.title}</div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default AppFooter;
