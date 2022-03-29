import React from "react";

function StudentLayout({
  classes,
  classroom,
  Spin,
  Space,
  Class_card,
  DynamicError,
  user,
}: any) {
  if (!classes.isLoading && classes.isError && classes.error)
    return (
      <DynamicError
        status={classes.error.status}
        message={classes.error.data.error.message}
      />
    );
  return (
    <div>
      {" "}
      <div>
        <div className="flex w-full h-screen flex-wrap">
          {classroom ? (
            classroom.class.map((classroom: any) => {
              return (
                <Class_card
                  key={classroom.id}
                  id={classroom.id}
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
            <div className="text-center text-gray-500 h-full w-full flex items-center justify-center">
              Belum ada kelas yang diikuti
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
