import React, { useEffect, useState } from "react";
import SelectRelease from "../../../../services/home/SelectRelease";
import { BsThreeDotsVertical } from "react-icons/bs";
import handlePreviewString from "../../../../utils/HandlePreviewString";
import { Link } from "react-router-dom";
import MovieGetDTO from "../../../../dtos/MovieGetDTO";

type Props = {
  name: string;
};

const PreviewSection = (props: Props) => {
  const [data, setData] = useState<MovieGetDTO[] | null | undefined>(null);
  useEffect(() => {
    switch (props.name) {
      case "New Releases":
        SelectRelease().then((res: MovieGetDTO[] | null | undefined) => {
          setData(res);
        });
        break;
      case "Popular in cinemas":
        SelectRelease().then((res: MovieGetDTO[] | null | undefined) => {
          setData(res);
        });
        break;
      case "Recommended for you":
        SelectRelease().then((res: MovieGetDTO[] | null | undefined) => {
          setData(res);
        });
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="">
      <div className="div-full flex items-center justify-between">
        <div className="text-base font-semibold text-white mb-2">
          {props.name}
        </div>
        <div className=" text-sm text-red-700 font-semibold hover:underline-offset-auto hover:underline">
          View all
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data &&
          data.map((item, index) => {
            return (
              <Link
                to={`/home/${item.id}`}
                key={item.title}
                className="col-span-1"
              >
                <div className="w-full h-48 rounded-xl bg-zinc-700">
                  <img
                    src={`${item.thumbnail}`}
                    alt={`${item.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full grid grid-cols-6">
                  <div
                    className=" text-xs text-white mt-2 text col-span-5
                  "
                  >
                    {handlePreviewString(item.title, 25)}
                  </div>
                  <div className="text-white  text-lg col-span-1 flex flex-col justify-start mt-3 items-end">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PreviewSection;
