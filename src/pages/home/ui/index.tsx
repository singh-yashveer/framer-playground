import Circle from "../../../widgets/circle/ui";
import { Nav } from "../../../widgets/nav/ui";
import "./index.css";

function App() {
  return (
    <>
      <Circle />
      {/* <button onClick={() => animate(".circle", { backgroundColor: "blue" })}>Disappear</button>
      <button onClick={() => animate(".circle", { backgroundColor: "green" })}>Disappear1</button> */}
      <Nav />
    </>
  );
}

export default App;
