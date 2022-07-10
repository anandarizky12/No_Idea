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
