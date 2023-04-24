document.getElementById("toggleUseRef").innerHTML = `
import "./App.css";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const changeTheme = () =&gt; {
    setTheme(!theme);
  };
  return (
    &lt;&gt;
      &lt;h1 style={{ color: theme ? "green" : "blue" }}&gt;This is a Heading&lt;/h1&gt;
      &lt;p style={{color: theme ? "black" : "white" , backgroundColor: theme ? "white" : "black"}}&gt;
        This is a paragraph.
      &lt;/p&gt;
      &lt;button onClick={changeTheme}&gt;Click!&lt;/button&gt;
    &lt;/&gt;
  );
}

export default App;
      
      `;