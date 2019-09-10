import React from "react";

function Food({
  fav
}) {
  return <h1 > I like {
    fav
  } < /h1>;
}

function App() {
  return ( <
    div >
    <
    h1 > Hello < /h1> <
    Food fav = "a" / >
    <
    Food fav = "b" / >
    <
    Food fav = "c" / >
    <
    Food fav = "d" / >
    <
    Food fav = "e" / >
    <
    /div>
  );
}
export default App;