export default function Hero() {
  return (
    <main className="flex flex-col h-screen w-full justify-end items-center lg:items-start overflow-hidden">
      <video
        className="h-screen w-full object-cover -z-50 absolute"
        src="/videos/TRIA.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="text-white w-full flex text-2xl justify-center md:text-5xl md:justify-end gap-3 p-10">
        <h1>
          You <span className="text-sky-500 font-bold">Decide</span>
        </h1>
        <h1>
          We <span className="text-sky-500 font-bold">Create</span>
        </h1>
      </div>
    </main>
  );
}
