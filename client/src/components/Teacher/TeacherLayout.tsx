function TeacherLayout({
  classes,
  classroom,
  Spin,
  Space,
  Classcard,
  DynamicError,
  user,
}: any) {
  if (!classes.isLoading && classes.isError && classes.error)
    return (
      <DynamicError
        status={classes?.error?.status}
        message={classes?.error?.data?.message}
      />
    );

  return (
    <div>
      <div className="flex w-full flex-wrap">
        {!classes.isLoading && !classes.isError && classroom !== null ? (
          <div className="flex justify-center items-center w-full h-screen">
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          classroom?.class.map((classroom: any) => {
            return (
              <Classcard
                key={classroom.id}
                id={classroom.id}
                classroom={classroom}
                user={user}
              />
            );
          })
        )}

        {classroom && classroom.class.length === 0 && (
          <div className="text-center text-gray-500 h-full w-full flex items-center justify-center">
            Belum ada kelas yang dibuat
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherLayout;
