import "./App.css";
import Button from "./components/Button";
import Hello from "./components/Hello";
import User from "./components/User";
import { bsize } from "./components/Button";

function App() {
  return (
    <>
      <Hello name="Hannan" country="Pakistan" />
      <User
        fname="Ali"
        lname="Ahmed"
        age={12}
        phone={3231123331}
        email="hanan@gmail.com"
      />
      <Button
        label="Submit"
        variant="primary"
        onclick={() => alert("Button one")}
        disabled={true}
        size={bsize.large}
      />
      <Button
        label="Submit"
        variant="primary"
        onclick={() => alert("Button two")}
        disabled={false}
        size={bsize.large}
      />
      <Button
        label="Submit"
        variant="primary"
        onclick={() => alert("Button one")}
        disabled={true}
        size={bsize.large}
      />
    </>
  );
}

export default App;
