import { useState } from "react";
import Atracoes from "./Atracoes";
import CardapioComida from "./CardapioComida";
import ConfirmarPresenca from "./ConfirmarPresenca";
import Modal from "./Modal";

export default function Info() {
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

  return (
    <section className="text-slate-50 max-w-screen-xl p-2 gap-x-2 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] m-2 sm:m-4 rounded-sm flex flex-col justify-center">
      <div className="text-start p-2 md:p-6 flex flex-col bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)]">
        <div className="flex justify-between min-w-36 items-center">
          <img
            className="w-36 h-56 sm:w-72 sm:h-96 -rotate-3"
            src="https://firebasestorage.googleapis.com/v0/b/meus-15-anos-25-anos-depois.appspot.com/o/image%2FImg.jpeg?alt=media&token=480e0564-7098-4ce1-bf02-18d3efaec6db"
            alt=""
          />
          <h1 className=" text-2xl sm:text-3xl  md:text-4xl lg:text-6xl pl-4 py-4 sm:pl-16">
            Vamos brindar à vida e o futuro? Sua presença tornará este momento
            ainda mais especial e inesquecíveis.
          </h1>
        </div>
        <div className="flex  flex-col md:flex-row">
          <div className="flex flex-col justify-around flex-1">
            <div className="flex flex-col md:flex-row gap-4 mt-7 justify-evenly">
              {/* <button className="p-3 font-bold bg-white hover:bg-slate-100 text-red-800 rounded-sm">
                Atrações
              </button> */}
              <Atracoes />
              {/* <button className="p-3 font-bold bg-white hover:bg-slate-100 text-red-800 rounded-sm">
                Cardapio
              </button> */}
              <CardapioComida />
            </div>
            <div className="my-4">
              <p>
                <strong>Data</strong>: 31/08/2024 - <strong>20h</strong>
              </p>
              <a
                href="https://www.google.com/maps/place/Centro+Eventos+Palhoca/@-27.6391779,-48.6742327,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x9527358165421895:0x87be80f15bdf90b5!2sAv.+Cl%C3%A1udio+Zacchi,+415+-+Passa+Vinte,+Palho%C3%A7a+-+SC,+88132-080!2m2!1d-48.6723969!2d-27.6391831!3m5!1s0x9527358165421895:0x87be80f15bdf90b5!8m2!3d-27.6391813!4d-48.6724082!16s%2Fg%2F11s4_hl_72?entry=ttu"
                target="_blank"
              >
                <p>
                  <strong>Local</strong>: Centro de eventos palhoça
                </p>
              </a>
              <p>
                <strong>Traje</strong>: Social Esporte
              </p>
            </div>
            <div>
              <button
                disabled
                onClick={() => setOpenModalConfirmation(true)}
                className="p-3 my-4 max-w-[180px] tex font-bold bg-white hover:bg-slate-100 text-red-800 rounded-sm"
              >
                Confirme sua presença
              </button>
            </div>
          </div>
        </div>
      </div>

      {openModalConfirmation && (
        <Modal
          titulo="Confirme sua presença"
          children={<ConfirmarPresenca />}
          openModal={setOpenModalConfirmation}
        />
      )}
    </section>
  );
}
