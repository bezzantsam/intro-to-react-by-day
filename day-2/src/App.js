import React from "react";

import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1em",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <tbody>
          <tr>
            <th>Bulbasaur</th>
            <th>Grass, Poison</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
