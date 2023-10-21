import React from "react";

type Props = {};

const ModalIsLoading = (props: Props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className=" rounded-lg p-4">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-full h-16 w-16 border-b-2 border-white">
              <div className="flex items-center justify-center h-full w-full">
                <div className="bg-black rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIsLoading;
