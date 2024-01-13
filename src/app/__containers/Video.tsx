export default function Video() {
  return (
    <main>
      <iframe
        className="h-[400px] w-full object-cover"
        src="https://www.youtube.com/embed/DTCxg8VX41I?si=PN7x4RS--pqSDcq_"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}
