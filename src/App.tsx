import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log('liked')}/>
    </div>
  );
}

export default App;
