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
import supabase from "../../config/supabase/supabase";
import GetUserID from "../../utils/GetUserID";
import { CgProfile } from "react-icons/cg";
import ModalIsLoading from "../../components/modalIsLoading/ModalIsLoading";
type Props = {};

const ProfilePage = (props: Props) => {
  const [hasAvatar, setHasAvatar] = React.useState<boolean>(false);
  const [myProfile, setMyProfile] = React.useState({});
  const [imageSrc, setImageSrc] = React.useState<string>("");
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

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

  React.useEffect(() => {
    const renderProfile = async () => {
      console.log("start rendering");
      const currentUsers = await store.get(CURRENT_USER);
      setMyProfile(currentUsers);
    };

    renderProfile();
  }, []);

  React.useEffect(() => {
    const renderAvatar = async () => {
      const user = await GetUserID();
      const { data, error } = await supabase.storage.from("avatars").list("", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
        search: user,
      });
      if (error) {
        throw error;
      }
      if (data) {
        setHasAvatar(data.length > 0);
        if (data.length > 0) {
          setImageSrc(
            "https://wujwdhzvyjbytquaahdd.supabase.co/storage/v1/object/public/avatars/" +
              data[0].name
          );
        }
      }
    };
    renderAvatar();
  }, []);

  return (
    <div>
      {isUploading ? (
        <ModalIsLoading />
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col mt-12 justify-center items-center mb-10">
            <div
              onClick={() => {
                const avatar = document.getElementById("avatar");
                avatar?.click();
              }}
            >
              {hasAvatar ? (
                <img
                  src={imageSrc}
                  className="bg-slate-700 border rounded-full w-28 h-28 object-cover"
                  alt="avatar"
                />
              ) : (
                <CgProfile className="bg-slate-700 border rounded-full w-28 h-28 object-cover" />
              )}
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
          <div>
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
                    changeImgSrc={setImageSrc}
                    setUpload={setIsUploading}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};


export default ProfilePage;
