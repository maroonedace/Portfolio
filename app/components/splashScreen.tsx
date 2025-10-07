const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-zinc-900 z-50">
      <span className="text-2xl">Loading Portfolio...</span>
      <div className="w-20 h-20 border-4 border-t-blue-500 border-zinc-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default SplashScreen;
