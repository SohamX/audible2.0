import React from "react";
import homeImg from "../images/homee.jpg";
import blogImg from "../images/blog.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase.config";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

function Home() {

  const [file, setFile] = useState({});
  const [textValue, setTextValue] = useState("")
  const navigate = useNavigate()

  const convertFile = async () => {

    if (file?.name?.includes(".txt") || file?.name?.includes(".pdf")) {
     
      navigate('/convertfile', {
        state :{
          textValue: textValue
        }
      })
    } else {
      window.alert("Sahi file daal");
    }

    // return await response.json();
  };


  const handleChange = (e) => {
    setFile(e.target.files[0]);
    const currentFile = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      const file = e.target.result;
      setTextValue(file);
    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(currentFile);
  };

  return (
    <div>
      <div className="bg-rose-50 px-4 py-44 md:px-20  xl:px-40 xl:py-20  ">
        <div className="flex ">
          <img
            className="w-44 md:w-1/3 xl:w-1/5 rounded-3xl object-contain bg-white"
            src={homeImg}
            alt="home"
          />
          <div className=" w-full p-4 ml-4 xl:ml-16 md:w-1/2 ">
            <h1 className="text-4xl md:text-5xl xl:text-6xl ">Audible2.0</h1>
            <h1 className=" text-lg md:text-xl xl:text-2xl pt-3">
              Make learning alot of fun by listening the book.
            </h1>
            <h1 className="text-xl mb-4">
              Convert the pdf, text or word files into audio.
            </h1>

            <label className="text-md" htmlFor="file_input">
              Upload file
            </label>
            <input
              className="block w-full md:w-1/2  text-sm text-white p-1  border rounded-md cursor-pointer bg-gray-800	 dark:text-gray-400 focus:outline-none"
              id="file_input"
              type="file"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <p className="mt-1 text-sm " id="file_input_help">
              txt or pdf.
            </p>
            <button onClick={convertFile} className="bg-orange-200  px-4 py-1 mt-3 cursor-pointer rounded-full">
              Convert
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-emerald-50	 rounded-lg p-7 mx-4 my-10 md:mx-10 xl:mx-40 ">
        <h1 className="text-xl">Blog you might want to read</h1>

        <div className=" flex flex-wrap justify-center mt-4">
          <div className=" rounded-md overflow-hidden relative w-80  m-5 bg-white">
            <img src={homeImg} alt="home" />
            <h1 className="text-lg p-4 ">Learning Disabilities</h1>
            <h1 className="text-sm px-4 pb-32">
              If you feel that your organizational skills need improvement, then
              you must rely on tools strategies to help you be more productive.
            </h1>
            <button className="m-4 p-1 absolute bottom-0 rounded-md bg-orange-200 cursor-pointer  border">
              Read more
            </button>
          </div>

          <div className=" rounded-md overflow-hidden relative w-80  m-5 bg-white">
            <img src={blogImg} alt="blog img" />

            <h1 className="text-lg p-4 ">
              Dealing With an ADHD Diagnosis as an Adult
            </h1>
            <h1 className="text-sm px-4 ">
              Many people associate ADHD with children, or think it’s a “kid’s
              disorder”. But, about 4-5% of adults in the U.S. have it.
              Unfortunately, not many adults get an official diagnosis or
              treatment.
            </h1>
            <button className="m-4 p-1 absolute bottom-0  rounded-md bg-orange-200 cursor-pointer  border">
              Read more
            </button>
          </div>

          <div className=" rounded-md overflow-hidden relative w-80 m-5 bg-white">
            <img src={homeImg} alt="home" />
            <h1 className="text-lg p-4 ">
              Learning Disability, Dyslexia, ADHD Know Your Rights
            </h1>
            <h1 className="text-sm px-4 ">
              if you suffer from learning disabilities, attention deficit
              hyperactivity disorder (ADHD) or dyslexia, you are entitled to
              certain inalienable rights under the Individuals with Disabilities
              Education Act 2004 (IDEA)
            </h1>
            <button className="m-4 p-1 absolute bottom-0 rounded-md bg-orange-200 cursor-pointer  border">
              Read more
            </button>
          </div>

          <div className=" rounded-md overflow-hidden relative w-80 m-5 bg-white">
            <img src={blogImg} alt="blog img" />
            <h1 className="text-lg p-4 ">
              Learning Disability Testing and Assessment
            </h1>
            <h1 className="text-sm px-4 ">
              No parent likes to watch their child struggle. Not in school, not
              in life. No adult wants to struggle with learning disabilities
              either.{" "}
            </h1>
            <button className="m-4 p-1 absolute bottom-0  rounded-md bg-orange-200 cursor-pointer  border">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Home;
