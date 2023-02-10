import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import music from "../images/music.jpg";
import { motion } from "framer-motion";
import { getAllAudio } from "../api";
import { actionType } from "../context/reducer";

export const AudioCard = ({ data, index }) => {
  return (
    <motion.div className="relative p-5 m-5 flex justify-between items-center bg-white rounded-lg ">
      <div className="flex">
        <img
          src={music}
          className="w-14 rounded-md object-contain "
          alt="audio_img"
        />
        <div className="p-4">
          <h1 className="">{data?.name}</h1>
          <h2>10.45</h2>
        </div>
      </div>
      <button className="border h-fit p-2 rounded-md bg-amber-900	 text-white">
        Start
      </button>
    </motion.div>
  );
};

function SavedLibrary() {
  const [{ allAudio }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allAudio) {
      getAllAudio().then((data) => {
        dispatch({
          type: actionType.SET_ALL_AUDIO,
          allAudio: data.song,
        });
      });
    }
  }, []);


  return (
    <div className="p-10 bg-emerald-50 ">
      <h1 className="text-xl md:text-2xl xl:text-3xl text-center">
        Saved library
      </h1>

      {allAudio &&
        allAudio?.map((data, i) => (
         <AudioCard data={data} index={i} />
        ))
      }

    </div>
  );
}



export default SavedLibrary;
