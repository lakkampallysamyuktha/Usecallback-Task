
import React from "react";
// import Userender from './Userender'
// import Chat from './Chat'
import UseIdHook from "./UseIdHook";
import CallbackHook from "./CallbackHook";
import UseCallBackHook from "./UseCallBackHook";
import "./style.css";

export default function App() {

  return (
     // <Chat/>
      //  <Userender/>
    <div className="app">

      <h1 className="title">React Hook</h1>
      

      <div className="card">
        <h2>Component 1</h2>
        <UseIdHook />
      </div>

      <div className="card">
        <h2>Component 2</h2>
        <UseIdHook />
      </div>

      <div className="card">
        <h2>Component 3</h2>
        <UseIdHook />
      </div>

      <div className="card">
        <CallbackHook />
      </div>

      <div className="card">
        <UseIdHook/>
        <UseCallBackHook />
      </div>

    </div>
  );
}
