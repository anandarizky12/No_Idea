function DynamicError({
  status = 500,
  message = "Server Error, Please Try Agai Later",
}: any) {
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex items-center justify-center flex-col"
    >
      <h1 className="text-9xl text-gray-300">{status}</h1>
      <h3 className="text-gray-400">{message}</h3>
    </div>
  );
}

export default DynamicError;
