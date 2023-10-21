import React from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoFilterOutline } from "react-icons/io5";
import store from "../../../../config/storage/IonicStorage";
type Props = {};

const HeaderSection = (props: Props) => {
  const [myProfile, setMyProfile] = React.useState({});

  React.useEffect(() => {
    store
      .get("myUser")
      .then((res) => {
        console.log("my user from profile", res);
        setMyProfile({ ...res });
      })
      .then(() => {
        console.log(myProfile);
      })
      .finally(() => {});
  }, []);

  return (
    <div className={`h-32 sticky top-0 left-0 right-0 px-4 py-3  bg-black`}>
      <div className="grid grid-cols-12 h-1/2">
        {/* avatar section */}
        <div className="col-span-2 flex justify-start items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
        {/* user info section */}
        <div className="col-span-8 flex flex-col justify-center">
          <div className="text font-semibold flex gap-2">
            {
              //@ts-ignore
              myProfile.user_metadata ? (
                <div>
                  {
                    //@ts-ignore
                    `Hello, ${myProfile.user_metadata.firstName} ${myProfile.user_metadata.lastName}`
                  }
                </div>
              ) : (
                <div></div>
              )
            }
          </div>
          <div className="text-sm font-bold text-neutral-600">
            How do you feel today?
          </div>
        </div>
        {/* notification section */}
        <div className="col-span-2 flex justify-end items-center">
          <IoNotificationsSharp className="text-2xl" />
        </div>
      </div>

      {/* search section */}
      <div className="mt-1 grid grid-cols-12 h-1/2">
        <div className="col-span-12 flex justify-center items-center">
          <div className="w-full h-10 bg-zinc-700 rounded-xl grid grid-cols-12 px-6 ">
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-2xl">
                <BiSearchAlt2 />
              </div>
            </div>
            <div className="col-span-10 flex justify-center items-center">
              <input
                type="text"
                placeholder="Search by movies or cinema"
                className="w-full h-full px-4 bg-transparent outline-none text-sm border border-transparent focus:ring-transparent focus:ring-0 "
              />
            </div>
            {/* filter section */}
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-2xl">
                <IoFilterOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
