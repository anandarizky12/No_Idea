function DynamicError({ status, message }: any) {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-9xl text-gray-300">{status}</h1>
      <h3 className="text-gray-400">{message}</h3>
    </div>
  );
}

export default DynamicError;
