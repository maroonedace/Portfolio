const Content = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <iframe
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
        src="https://www.youtube.com/embed/z-KPfnebmsY?si=Bq1rsKqwuddQ_xxN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p className="sm:text-base md:text-lg lg:text-xl">
        When I joined TritonXR, I worked for a project called NutritionXR, which
        focused on creating VR applications that would help users learn about
        nutrition. I worked on a few small projects until I was asked to lead my
        own project. I decided to lead a new application called Food Quest,
        where a player would fight food monsters and use ingredients to create
        real life recipes. After recruiting some members, I assigned them tasks
        such as working design character and model assets as well as work on
        certain game mechanics. My main focus was developing gameplay mechanics
        such as creating the player classes, locomotion behavior for game
        characters, and cutting, mixing, and stirring mechanics for the cooking
        experience.
      </p>
    </div>
  );
};

export default Content;
