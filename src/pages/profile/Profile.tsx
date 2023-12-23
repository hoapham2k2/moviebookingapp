import React from "react";
import {
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { logoutUser } from "../../services/authentication/Authentication";
import store from "../../config/storage/IonicStorage";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { CURRENT_USER } from "../../utils/SharedValues";
import ItemOptions from "./components/ItemOptions";

type Props = {};

const ProfilePage = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useHistory();
  const [myProfile, setMyProfile] = React.useState({});
  const avatarRef = React.useRef<HTMLImageElement>(null);
  const renderProfile = async () => {
    console.log("start rendering");
    const currentUsers = await store.get(CURRENT_USER);
    setMyProfile(currentUsers);
  };

  React.useEffect(() => {
    renderProfile();
  }, []);

  const PROFILE_OPTIONS = [
    {
      displayName: "Notifications",
      icon: <BellAlertIcon className="w-6 h-6 mr-1" />,
    },
    {
      displayName: "Settings",
      icon: <Cog6ToothIcon className="w-6 h-6 mr-1" />,
    },
    {
      displayName: "Change Profiles",
      icon: <UserCircleIcon className="w-6 h-6 mr-1" />,
    },
    {
      displayName: "Your History Purchase",
      icon: <CurrencyDollarIcon className="w-6 h-6 mr-1" />,
    },
    {
      displayName: "Log out",
      icon: <ArrowRightOnRectangleIcon className="w-6 h-6 mr-1" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col mt-12 justify-center items-center mb-10">
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/lol-t1-1.jpg"
          className="bg-slate-700 border rounded-full w-28 h-28 object-cover"
          alt="avatar"
          ref={avatarRef}
        />
        <h1 className="text-lg mt-4">
          {
            //@ts-ignore
            myProfile.user_metadata ? (
              <div>
                {
                  //@ts-ignore
                  `${myProfile.user_metadata.firstName} ${myProfile.user_metadata.lastName}`
                }
              </div>
            ) : (
              <div></div>
            )
          }
        </h1>
      </div>
      <>
        {PROFILE_OPTIONS.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full px-4 py-2 grid grid-cols-2 active:scale-90 transition-all duration-300 ease-in-out"
            >
              <ItemOptions
                displayName={item.displayName}
                icon={item.icon}
                index={index}
                imgRef={avatarRef}
              />
            </div>
          );
        })}
      </>
    </div>
  );
};

export default ProfilePage;
