const Content = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-xl">
      <iframe
        className="w-full md:w-[80%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
        src="https://www.youtube.com/embed/z-KPfnebmsY?si=Bq1rsKqwuddQ_xxN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen 
      />
      <p className="">A description about my origin with TritonXR</p>
    </div>
  );
};

export default Content;
