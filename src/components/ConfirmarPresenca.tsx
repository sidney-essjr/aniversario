import { useForm } from "react-hook-form";
import { sendEmail } from "./helpers/functions/sendEmail";

export type ConfirmarPresencaType = {
  name: string;
  confirmation: string;
  companion: number;
  companionNames: string;
};

export default function ConfirmarPresenca() {
  const { register, reset, handleSubmit, watch } =
    useForm<ConfirmarPresencaType>();

  const isCompanion = watch("confirmation");

  async function onSubmit(data: ConfirmarPresencaType) {
    const response = await sendEmail(data);
    console.log(response)

    if (response) {
      window.alert("Resposta enviada!");
      reset();
    }
  }

  return (
    <section className="p-5 flex sm:w-[400px] ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <div className="flex gap-x-3 place-items-center">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
            className="text-red-800 p-2 rounded-sm outline-red-800 border-[1px] border-red-800 w-full"
          />
        </div>
        <fieldset className="p-4 border-[1px] border-red-800 my-3">
          <legend>Vai comparecer ao evento?</legend>
          <div className="flex gap-x-3">
            <label>Sim</label>
            <input type="radio" value="true" {...register("confirmation")} />
          </div>
          <div className="flex gap-x-3">
            <label>Não</label>
            <input type="radio" value="false" {...register("confirmation")} />
          </div>
        </fieldset>
        <div className="flex gap-x-3 place-items-center">
          <label htmlFor="companio">Acompanhantes</label>
          <input
            type="number"
            {...register("companion")}
            placeholder="ex. 1"
            min={0}
            max={5}
            className="w-20 rounded-sm text-red-800 p-2 text-center border-[1px] border-red-800 outline-red-800"
          />
        </div>
        {isCompanion === "true" && (
          <div className="flex flex-col mt-3">
            <label htmlFor="name">Seus acompanhantes</label>
            <textarea
              placeholder="Digite o nome de seus acompanhantes"
              {...register("companionNames")}
              className="text-red-800 p-2 rounded-sm outline-red-800 border-[1px] border-red-800"
            />
          </div>
        )}
        <button className="py-3 mt-2 px-5 rounded-sm text-slate-50 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)]">
          Enviar
        </button>
      </form>
    </section>
  );
}
