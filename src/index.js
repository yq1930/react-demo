import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// function timer() {
//   const element = (
//     <div>
//       <h1>111</h1>
//       <h2>it is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(timer);

ReactDOM.render(<App />, document.getElementById("root"));
