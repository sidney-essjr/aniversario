export default function Header() {
  return (
    <header className="p-2 flex max-w-screen-xl m-2 sm:m-4 rounded-sm bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)]">
      <div className="p-2 text-center flex-grow bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] ">
        <h1 className="text-2xl text-slate-50">
          Meus 15 anos <br /> <span className="text-4xl">25 anos depois!</span>
        </h1>
      </div>
    </header>
  );
}
