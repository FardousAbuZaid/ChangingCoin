import "./App.css";
/* if we write export before the function like what i did in change function
 when we do an import to the function we have to use {} inside we write the name 
 of the function.
 else we write the import without {}*/
import { Change } from "./components/Change";

function App() {
  return (
    <div className="App">
      <Change />
    </div>
  );
}

export default App;
