
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

export const conditionalRowStyles: ConditionalStyles<IConditionalStyles>[] = [
  {
    when: (row) => row.score > "80",
    style: {
      backgroundColor: "#6BCB77",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row) => row.score < "80" && row.score >= "60",
    style: {
      backgroundColor: "#EC9B3B",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row) => row.score <= "50",
    style: {
      backgroundColor: "#FF1818",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
];


type DataRow = {
  task_title: string;
  score: string;
  user: string;
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
];

