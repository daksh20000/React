import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "this is the content"
//     )


// const HeadingComponentWithReturn = ()=>{
//     return <h1>this is text from component</h1>
// }
// const HeadingComponentWithoutReturn = ()=><h1>this is text from component without return statement(explicitly) </h1>

// const HeadingComponentMultilineWithoutReturn = ()=>(
    
//         <div id= "container">
//             <HeadingComponentWithoutReturn/>
//             <h1>
//                 this is written
//                 as
//                 a multiline content and also without 
//                 return statement(explicitly)
//             </h1>
//         </div>
// )


// const jsxHeading = (<div>

//     <h1>content of heading through jsx</h1>
// </div>

// )

const child = <h1><h1>this is content</h1></h1>
const parent = (<h1>
    this is paren, inside which i will use the child here
    {child}
</h1>)
        
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
// root.render(<HeadingComponentWithReturn />)
// root.render(<HeadingComponentWithoutReturn />)
// root.render(<HeadingComponentMultilineWithoutReturn />)
