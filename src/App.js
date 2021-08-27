/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import Module03 from "./Module_03/Module03";
import Styleing06 from './Styleing_06/Styleing06';
import Module_08 from "./Module_08/Module_08";
import Module_10 from './Module_10/Module_10';
import { AuthContextProvider } from "./Module_10/store/auth-context";

function App() {
  return (
    <div className="App">
      {/* <Module03 /> */}
      {/* <Styleing06 /> */}
      {/* <Module_08 /> */}

      <AuthContextProvider><Module_10 /></AuthContextProvider>

    </div>
  );
}

export default App;