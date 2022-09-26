import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header"
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Overeacted." />
    <About about="" />
     <ArticleList item="A universal truth. - Noam Chomsky" />
     
   </div>
      

  );
}

export default App;
