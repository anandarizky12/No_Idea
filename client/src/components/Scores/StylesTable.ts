
import { ConditionalStyles, TableColumn } from "react-data-table-component";

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



type DataRow = {
  task_title: string;
  score: string;
  user: string;
  date : string;
};
export const columns: TableColumn<DataRow>[] = [
  {
    name: "Nama Siswa",
    selector: (row) => row.user,
    sortable: true,
  },
  {
    name: "Nama Tugas",
    selector: (row) => row.task_title,
  },
  {
    name: "Nilai",
    selector: (row) => row.score,
    sortable: true,
    style: {
      fontSize: "15px",
    },
  },
  {
    name: "Tanggal Pengerjaan",
    selector: (row) => row.date,
    sortable: true
  },
];

