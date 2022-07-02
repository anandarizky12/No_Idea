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
