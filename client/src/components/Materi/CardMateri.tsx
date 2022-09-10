import { FileExclamationOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import moment from "moment";
interface IProps {
  title: string;
  description: string;
  file: string;
  date: string;
}

function CardMateri({ title, description, file, date }: IProps) {
  return (
    <div className="w-full border shadow-md border-b border-gray-300 mb-5 rounded-md text-primary p-4">
      <div className="flex justify-between">
        <div className="flex">
          <Avatar
            style={{ background: "gray" }}
            icon={<FileExclamationOutlined />}
          />

          <h3 className="p-0 m-0 ml-4">{title}</h3>
        </div>
        <div className="">
          <p className="text-primary">
            {moment(date).format("MMMM Do YYYY , h:mm:ss a")}
          </p>
        </div>
      </div>
      <div className="border-t pt-4">
        <p className="text-primary text-xl">{description}</p>
        <div className="flex items-center p-2 border rounded-sm cursor-pointer hover:shadow-xl hover:border-gray-300">
          <div className="AttachmentItem__icon flex justify-center items-center flex-shrink">
            <svg width="24" height="24" viewBox="0 0 24 24" name="pdf-icon">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z"
                fill="#FF3352"
              ></path>
              <path
                d="M5.41 15.044c.554 0 .866-.338.866-.932v-.879h.787c1.463 0 2.342-.734 2.342-2.122C9.405 9.823 8.548 9 7.168 9H5.59c-.751 0-1.046.317-1.046 1.13v3.981c0 .598.308.932.866.932zm.87-3.059v-1.678h.602c.532 0 .822.303.822.835 0 .62-.294.843-.87.843H6.28zM9.816 14.095c0 .571.334.905.9.905h1.627c1.78 0 2.746-1.05 2.746-3.002 0-1.946-.966-2.997-2.746-2.997h-1.626c-.567 0-.901.334-.901.906v4.188zm1.731-.444v-3.305h.493c.892 0 1.274.497 1.274 1.652 0 1.156-.382 1.653-1.274 1.653h-.493zM16.48 15.044c.545 0 .844-.33.844-.932v-1.235h1.7c.388 0 .651-.268.651-.659 0-.39-.259-.659-.65-.659h-1.7v-1.195h1.92c.378 0 .654-.277.654-.677 0-.396-.276-.686-.654-.686h-2.76c-.558 0-.897.339-.897.906v4.205c0 .594.326.932.893.932z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div className="pl-2 w-100">
            <div className="title">
              <a
                href={`http://localhost:5000${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="qa-test-AttachmentItem__title AttachmentItem__title font-semibold text-primary"
              >
                {file.slice(6, file.length)}
              </a>
            </div>
            <span className="subtext"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMateri;
