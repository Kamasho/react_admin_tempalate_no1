import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import useLocalStorage from "use-local-storage"
import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  //const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isThemeDark, setThemeDark] = useLocalStorage(
    "isThemeDark",
    false
  );

  return (
    <div className="App" data-theme={isThemeDark ? "dark" : "light"}>
      {/* <ThemeToggle isChecked={isThemeDark} handleThemeChange={()=> setThemeDark(!isThemeDark)} /> */}
     <SideBar />
    </div>
  );
}

export default App;
