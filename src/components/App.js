import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header"
import About from "./About"


function App() {
  return (
    <div className="App">
      <Header name="Overeacted." />
    <About about="A blog about learning React" />
     <ArticleList item="A universal truth. - Noam Chomsky" />
     
   </div>
      

  );
}

export default App;

// import React from "react";
// //import blogData from "../data/blog";
// import Header from './Header'
// import About from './About'
// import ArticleList from './ArticleList'


// function App() {
//   return (
//     <div className="App">
//       <Header name="Underrreacted"/>
//       <About about="A blog about learning React"/>
//       <ArticleList/>
//     </div>
//   );
// }

// export default App;
