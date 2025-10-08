"use client"

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-primary z-50">
      <span className="text-2xl">Loading Portfolio...</span>
      <div className="w-20 h-20 border-4 border-t-cyan-900 border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default SplashScreen;
