import React from "react";

function Form() {
  return (
    <div className="   " style={{backgroundColor: "rgba(0, 0, 0,0.2)"}}>
      <div className="w-full border-b-[2px] content-center p-10 bg-white-200 font-serif text-center text-lg  text-transform: uppercase">
        <h1 className=" ">Maintenance Request Form</h1>
      </div>
      <form>
        <div className=" xxl:p-20 xs:p-10  ">
          <div className="mb-8 xxl:flex   sm:flex xs:block  ">
            <label className=" xxl:w-1/2 lg:w   xs:w-full    text-left ">
              Device Name :
            </label>
            <select className="border-2 xxl:w-80   xs:w-full  p-1">
              <option></option>
              <option>Defibrillator</option>
              <option>Ventilator</option>
              <option>ECG machine</option>
              <option>Monitor</option>
            </select>
          </div>
          <div className="mb-8 xxl:flex   sm:flex xs:block">
            <label className="xxl:w-1/2 lg:w   xs:w-full    text-left">
              Model :
            </label>
            <select className="border-2 xxl:w-80   xs:w-full p-1 ">
              <option></option>
              <option>Def2013</option>
              <option>Vent2024</option>
              <option>Ecg2017</option>
              <option>Mon2020</option>
            </select>
          </div>
          <div className="mb-8 xxl:flex   sm:flex xs:block">
            <label className="xxl:w-1/2 lg:w   xs:w-full    text-left">
              Serial Number :
            </label>
            <select className="border-2 xxl:w-80   xs:w-full p-1">
              <option></option>
              <option>Dfg78j</option>
              <option>Ve00gh</option>
              <option>E000hj</option>
              <option>Mgght9</option>
            </select>
          </div>
          <div className="mb-8 xxl:flex   sm:flex xs:block">
            <label className="xxl:w-1/2 lg:w   xs:w-full    text-left">
              Fault Description :
            </label>
            <textarea className="border-2 xxl:w-full xl:w-full lg:w-full md:w-full sm:w-full xs:w-full h-60" />
          </div>
          <div className="flex w-full content-center" style={{justifyContent:"center"}} >
            <div
              className="button w-20 h-10 bg-teal-500  cursor-pointer select-none  ease-in-out delay-50 hover:translate-y-1
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#96e9e5,0_15px_0_0_#1b70f841]
    rounded-full  border-b-[1px] border-blue-400"
            >
              <span class="flex flex-col justify-center items-center h-full text-white  text-md active:text-yellow-200 ">
                Submit
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
