import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import MyProvider from "./context/StateContext";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <MyProvider>
        <Navbar />
        {element}
        <NewsLetter />
        <Footer />
      </MyProvider>
    </>
  );
}

export default App;
