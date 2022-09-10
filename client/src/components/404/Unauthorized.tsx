function Unauthorized(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center flex-col fixed top-0 left-0 right-0 z-96 bg-black">
      <h1 className="text-9xl text-gray-300">404</h1>
      <h3 className="text-gray-400">Not Found</h3>
    </div>
  );
}

export default Unauthorized;
