export default function Atracoes() {
  return (
    <section className="border-[1px] rounded-sm flex flex-col place-content-center place-items-center">
      <div className="p-4">
        <div className="flex w-72 h-40">
          <img
            src="/cardapioBebidas.png"
            alt=""
            className="hover:scale-[4]  active:scale-[4]"
          />
          <div className="p-4 flex flex-col place-content-center">
            <h2 className="text-xl font-bold">
              <a href="https://www.instagram.com/vikingsbartender">
                @vikingsbartender
              </a>
            </h2>
            <p>Conheça as opções de coquetéis disponíveis</p>
          </div>
        </div>
        <div className="flex w-72 h-40 mt-4">
          <div className="p-4 flex flex-col place-content-center">
            <h2 className="text-xl font-bold">
              <a href="">@plataforma360°</a>
            </h2>
            <p>Vídeos incriveis na plataforma 360°</p>
          </div>
          <img
            src="/plataforma.gif"
            alt=""
            className="hover:scale-[4] active:scale-[4]"
          />
        </div>
      </div>
    </section>
  );
}
