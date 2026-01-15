import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

console.log(user);

function App() {
  return (
    <div>
      {/* add the <Navbar> component here */}
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
      <NavBar />
      <Home  name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;