const Content = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <iframe
        className="sm:w-[80%] md:w-[70%] lg:w-[60%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
        src="https://www.youtube.com/embed/z-KPfnebmsY?si=Bq1rsKqwuddQ_xxN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p className="sm:text-base md:text-lg lg:text-xl">
        When I joined TritonXR, I worked on NutritionXR, a project focused on
        creating VR applications to teach users about nutrition. After
        contributing to a few smaller projects, I was given the opportunity to
        lead my own initiative. I proposed and led the development of a new
        application called Food Quest, a game where players fight food-themed
        monsters and use ingredients to create real-life recipes. After
        assembling a team, I assigned tasks such as designing character and
        model assets and implementing specific game mechanics. My primary focus
        was on developing gameplay features, including player classes,
        locomotion behavior for game characters, and interactive mechanics for
        cutting, mixing, and stirring as part of the cooking experience.
      </p>
    </div>
  );
};

export default Content;
