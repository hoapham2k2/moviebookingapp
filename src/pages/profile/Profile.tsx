import React, { useEffect, useState } from "react";
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
import UploadAvatar from "../../services/files/UploadAvatar";

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
  const [currentImage, setCurrentImg] = useState<string>();



  console.log("image after change is: ",currentImage);
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col mt-12 justify-center items-center mb-10">
        <div className=" mt-12 justify-center items-center mb-10 relative">
          <img
              src={currentImage}
              className="bg-slate-700 border rounded-full w-28 h-28 object-cover"
              alt="avatar" 
                     
            />
             <input className="absolute inset-0 opacity-0 cursor-pointer"
           onChange={async (e) => {
            // @ts-ignore
            const file = e.target.files[0];
            await UploadAvatar(file).then((res) => {
              setCurrentImg(res);
            });
          }}
          type="file"
          />
        </div>
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
