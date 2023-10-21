import React from "react";
import { lorem, ipsum, contacts } from "../constants";
import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="w-full my-10 text-secondary pb-40">
      <div className="w-[80%] m-auto flex justify-center p-8 text-center">
        <h1 className="text-[73px] font-semibold">
          We Develop Digital Future Want to join?
        </h1>
      </div>
      <div className="w-[90%] m-auto px-8 flex justify-between gap-4 py-10">
        <div className="w-1/4 flex flex-col justify-between ">
          <h1 className="text-2xl ">LOREM IPSUM</h1>
          {lorem.map((item) => (
            <div>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <div className=" flex w-[280px] px-6 flex-col justify-between">
          <h1 className="text-2xl  ">LOREM IPSUM</h1>
          {ipsum.map((item) => (
            <div>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <div className=" flex w-[280px] px-6 flex-col justify-between">
          <h1 className="text-2xl  ">Contacts</h1>
          {contacts.map((item) => (
            <div className="flex pr-8 py-4 ">
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6 mix-blend-lighten mr-4"
              />
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* <hr /> */}
      <div className="w-9/12 m-auto lineborder rounded-[2.px] bg-secondary h-[.1px]"></div>

      <div className="my-10 w-full m-auto flex flex-col justify-center text-center ">
        <p className="text-[14px] font-extralight my-3">
          © 2019 loremloremloremloremloremlorem
        </p>
        <p className="text-[14px] font-extralight my-3">
          Ronda Sant Pere 52, 08010 Barcelona,
        </p>
        <p className="text-[15px] font-extralight my-3">
          Inscripción en el Registro Mercantil de Barcelona. Tomo 46606, Folio
          37, Hoja 525271.
        </p>
      </div>
      <div className="w-[80%] m-auto grid grid-cols-2 gap-10 p-5">
        {footer.map(({ dex }) => (
          <div className="flex flex-col text-sm font-extralight">
            <p>{dex}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 m-auto text-center p-10">
        <p className="text-xl font-thin ">
          Lift no cobra comisiones de ningún tipo
        </p>
      </div>
    </div>
  );
};

export default Footer;
