import { useEffect } from "react";
import { RoutesMain } from "./routes";

function App() {
  useEffect(() => {
    const { pathname } = window.location;
    const htmlElement = document.querySelector("html");

    if (pathname.includes("profile")) {
      htmlElement.classList.remove();
    } else {
      htmlElement.classList.add("yellow");
    }
  }, []);

  return (
    <div className="App">
      <RoutesMain />
    </div>
  );
}

export default App;
