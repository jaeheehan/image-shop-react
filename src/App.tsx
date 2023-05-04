import { Route } from "react-router-dom";
import Home from "./components/Hom"

function App(){
  return <Route component={Home} path="/" exact/>;
}

export default App;
