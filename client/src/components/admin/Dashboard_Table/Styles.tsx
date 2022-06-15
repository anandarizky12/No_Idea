import { ConditionalStyles, TableColumn } from "react-data-table-component";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const customStyles = {
  headCells: {
    style: {
      padding: "0px",
      fontWeight: "bold",
      fontSize: "1.2em",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
  header: {
    style: {
      padding: "0px",
    },
  },
};

interface IConditionalStyles {
  score: string;
}

// export const conditionalRowStyles: ConditionalStyles<IConditionalStyles>[] = [
//   {
//     when: (row) => row.score > "80",
//     style: {
//       backgroundColor: "#6BCB77",
//       color: "white",
//       "&:hover": {
//         cursor: "pointer",
//       },
//     },
//   },
//   {
//     when: (row) => row.score < "80" && row.score >= "60",
//     style: {
//       backgroundColor: "#EC9B3B",
//       color: "white",
//       "&:hover": {
//         cursor: "pointer",
//       },
//     },
//   },
//   {
//     when: (row) => row.score <= "50",
//     style: {
//       backgroundColor: "#FF1818",
//       color: "white",
//       "&:hover": {
//         cursor: "pointer",
//       },
//     },
//   },
// ];

const handleButtonClick = (id: string) => {
  alert(id);
};

type DataRow = {
  name: string;
  email: string;
  phone: string;
  profile: string;
  role: string;
};

export const columns: TableColumn<DataRow>[] = [
  {
    name: "Nama Pengguna",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Nomor Telepon",
    selector: (row) => row.phone,
    sortable: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Foto",
    selector: (row) => row.profile,
    sortable: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Role",
    selector: (row) => row.role,

    sortable: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Aksi",
    cell: (row: any) => (
      <>
        <span
          onClick={() => handleButtonClick(row.id)}
          className="text-xl text-yellow-400 mr-4"
        >
          <EditOutlined />
        </span>
        {"     "}
        <span
          onClick={() => handleButtonClick(row.id)}
          className="text-xl text-red-600 mr-4"
        >
          <DeleteOutlined />
        </span>
      </>
    ),
  },
];
