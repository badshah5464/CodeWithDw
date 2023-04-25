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
document.getElementById("useStateValue").innerHTML = `
import "./App.css";
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState(0);
  const incrementBtn = () =&gt; {
    setVal(val + 1);
  };
  const decrementBtn = () =&gt; {
    setVal(val - 1);
  };
  return (
    &lt;&gt;
      &lt;h2&gt;{val} : Added Value&lt;/h2&gt;
      &lt;button onClick={incrementBtn} style={{ margin: "0 .5em" }}&gt;
        Add Value!
      &lt;/button&gt;
      &lt;button onClick={decrementBtn} style={{ margin: "0 .5em" }}&gt;
        Less Value!
      &lt;/button&gt;
    &lt;/&gt;
  );
}

export default App;

`;
