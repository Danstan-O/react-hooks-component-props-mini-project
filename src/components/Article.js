import React from "react";



// function Article({title, preview, date="January 1, 1970"}){
//     return (
//         <article>
//             <h3>{title}</h3>
//             <small>{date}</small>
//             <p>{preview}</p>
//         </article>
//     )
// }

// export default Article



function Article(props) {
    return (
      <article className="Article">
        <h3>{props.title}</h3>
        <small>{props.date}= "January 1, 1970 "</small>
        <p>{props.preview}</p>
      </article>
    );
  }
  
  export default Article;