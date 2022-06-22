import AvatarCustom from "../Avatar/AvatarCustom";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function StudentsCard({ student }: any) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  return (
    <div
      onClick={() => navigate(`/classroom/${id}/student/${student.id}`)}
      className="border w-full mt-5 rounded-md shadow-md h-16 hover:shadow-md cursor-pointer hover:text-blue-500"
    >
      <div className="flex items-center h-full px-5 justify-between">
        <div className="flex items-center">
          <AvatarCustom size={"large"} src={student.User.profile} />
          <div className="ml-5 font-medium">{student.User.name}</div>
        </div>
        <div className="">Siswa</div>
      </div>
    </div>
  );
}

export default StudentsCard;
