import HomeProfile from "../Profile/HomeProfile";
import UnfinishedTask from "../Task_home_list/Unfinishedtask";

function StudentLayout({
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
    <div className="w-full">
      <div className="flex justify-between w-full ">
        <div className="flex w-5/6 max-h-96 flex-wrap">
          {classroom ? (
            classroom.class.map((classroom: any) => {
              return (
                <Classcard
                  key={classroom.Classroom.id}
                  id={classroom.Classroom.id}
                  classroom={classroom.Classroom}
                  user={user}
                />
              );
            })
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          )}

          {classroom && classroom.class.length === 0 && (
            <div className="text-center text-gray-500 h-5/6 w-full flex items-center justify-center">
              Belum ada kelas yang diikuti
            </div>
          )}
        </div>
        <div className="py-2 rounded-md">
          <HomeProfile />
          <UnfinishedTask />
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
