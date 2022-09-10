function IsMobileBrowser(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center flex-col fixed top-0 left-0 right-0 z-96 bg-black">
      <h1 className="text-4xl text-gray-300 font-light">OOPPSS...</h1>
      <h3 className="text-gray-400">
        Sorry, This Website Is Not Available In Mobile
      </h3>
    </div>
  );
}

export default IsMobileBrowser;
