import { Dispatch, ReactNode, SetStateAction } from "react";

export default function Modal({
  titulo,
  children,
  openModal,
}: {
  titulo: string;
  children: ReactNode;
  openModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section className="bg-gray-950/45 w-full h-full fixed top-0 left-0 flex z-50 place-content-center place-items-center">
      <div className="bg-slate-50 text-red-800 font-bold rounded-sm p-5 min-w-72">
        <div className="flex">
          <h1 className="flex-1 text-center text-xl">{titulo}</h1>
          <button
            onClick={() => openModal(false)}
            className="rounded-sm p-2 w-6 h-6 place-content-center place-items-center flex bg-red-800 text-slate-50"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </section>
  );
}
