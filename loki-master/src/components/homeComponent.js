import React from "react";
import fire from "./back/fire";

function Home() {
  const signout = () => {
    fire.auth().signOut();
  };
  return (
    <div>
      <h1>You are logged in !!!</h1>
      <button onClick={signout}>Logout</button>
    </div>
  );
}
export default Home;
