import React from "react";
import loading from "./loading.gif";

const Spinner = ()=> {
 
    const iconSize = {
      width: "70px", // Adjust the width as needed
      height: "70px", // Adjust the height as needed
    };

    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" style={iconSize} />
      </div>
    );
  
}

export default Spinner
//Below code is for Prev , Next button logic above code is of infinite scroll
// import React, { Component } from "react";
// import loading from "./loading.gif";

// export default class Spinner extends Component {
//   render() {
//     const iconSize = {
//       width: "70px", // Adjust the width as needed
//       height: "70px", // Adjust the height as needed
//     };

//     return (
//       <div className="text-center">
//         <img src={loading} alt="loading" style={iconSize} />
//       </div>
//     );
//   }
// }
