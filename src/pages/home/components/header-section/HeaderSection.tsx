import React, { ChangeEvent } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoFilterOutline, IoReloadCircle } from "react-icons/io5";
import store from "../../../../config/storage/IonicStorage";
import SearchMovie from "../../../../services/searchMovie/SearchMovie";

type Props = {};

const HeaderSection = (props: Props) => {
  const [myProfile, setMyProfile] = React.useState({});
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const [resut, setResult] = React.useState<any>([]);
  const [showResult, setShowResult] = React.useState<boolean>(false);

  var timeoutId: any;

  const handleSearch = (e: any) => {
    if (e.target.value == "") {
      setIsSearching(false);
    }

    if (e.target.value != "") {
      setIsSearching(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(async () => {
        const res = await SearchMovie(e.target.value);
        console.log(res);
        setResult(res);
        setIsSearching(false);
        setShowResult(true);
      }, 1250);
    } else {
      setShowResult(false);
    }
  };

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
    <div className={`h-32 sticky top-0 left-0 right-0 px-4 py-3 bg-black `}>
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
      <div className="mt-1 grid grid-cols-12 h-1/2 w-full">
        <div className="relative col-span-12 flex justify-center items-center w-full">
          <div className="w-full h-10 bg-zinc-700 rounded-xl grid grid-cols-12 px-6">
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-2xl">
                <BiSearchAlt2 />
              </div>
            </div>
            <div className="col-span-10 flex justify-between items-center w-full ">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search by movies or cinema"
                  className="w-full h-full px-4 bg-transparent outline-none text-sm border border-transparent focus:ring-transparent focus:ring-0 "
                  onChange={handleSearch}
                  onBlur={() => setShowResult(false)}
                />
              </div>
              {isSearching && (
                <IoReloadCircle className="w-6 h-6 transition-all animate-spin duration-500 mr-4" />
              )}
            </div>

            {/* filter section */}
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-2xl">
                <IoFilterOutline />
              </div>
            </div>
          </div>
          {/**Search Result */}
          {showResult && (
            <div className="absolute rounded-xl text-black bg-slate-300 border border-slate-400 w-full top-12 max-h-96 overflow-scroll">
              {resut.map((item: any) => {
                return (
                  <SearchItem
                    title={item.title}
                    thumbnail={item.thumbnail}
                    duration={item.duration}
                    language={item.country}
                    genre={item.category}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

//Result compoenent

interface SearchItemComponent {
  title: string;
  thumbnail: string;
  duration: string;
  language: string;
  genre: string;
}

const SearchItem: React.FC<SearchItemComponent> = ({
  title,
  thumbnail,
  duration,
  language,
  genre,
}) => {
  return (
    <div className="flex px-4 py-2 gap-4 ">
      <div>
        <img src={thumbnail} className="w-14 h-18"></img>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-base font-bold">{title}</p>
        <div>
          <p className="text-xs ">Thời lượng: {duration}</p>
          <p className="text-xs">Ngôn ngữ: {language}</p>
          <p className="text-xs">Thể loại: {genre}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
