const heading = React.createElement("h1", 
{id: "heading", syz:"abc"}, "helloworld From React");
console.log(heading);
const Main = ReactDOM.createRoot(document.getElementById("Main"));
Main.render(heading);

// const parent = React.createElement("div", {id:"parent"}, 
// [React.createElement("div", {id:"1st-child"},
//  [React.createElement("h1", {id:"textOf1h1"}, "hello from 1st Child" ),
//  React.createElement("h2", {id:"textOf1H2"}, "Hello from 1st H2 text")]
//  ),React.createElement("div", {id:"2nd-child"},
//  [React.createElement("h1", {id:"textOf2h1"}, "hello from 2nd Child" ),
//  React.createElement("h2", {id:"textOf2H2"}, "Hello from 2nd H2 text")]
//  )]
//  )

// root.render(parent)
