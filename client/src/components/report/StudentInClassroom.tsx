import React from "react";

const StudentInClassroom = () => {
  return (
    <div>
      <h1>Report student In Classwroom</h1>
    </div>
  );
};

export default StudentInClassroom;
// import React from 'react';
// import ReactToPrint from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';

// class Example extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => {
//             // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//             // to the root node of the returned component as it will be overwritten.
//             return <a href="#">Print this out!</a>;
//           }}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }
