import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsInfinite from "./components/NewsInfinite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes component
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes> {/* Wrap your Route components in a Routes component */}
          <Route path="/" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<NewsInfinite setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


//Below code if you use Next, Prev button logic
// import "./App.css";

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// export default class App extends Component {
//   pageSize = 9;
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <News
//                   key="general"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="general"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/Business"
//               element={
//                 <News
//                   key="business"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="business"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/Entertainment"
//               element={
//                 <News
//                   key="entertainment"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="entertainment"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/General"
//               element={
//                 <News
//                   key="general"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="general"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/Health"
//               element={
//                 <News
//                   key="health"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="health"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/Science"
//               element={
//                 <News
//                   key="science"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="science"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/Sports"
//               element={
//                 <News
//                   key="sports"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="sports"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/Technology"
//               element={
//                 <News
//                   key="technology}>"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="technology"
//                 />
//               }
//             ></Route>
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }



