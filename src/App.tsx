import { BrowserRouter as Router } from "react-router-dom"
import MainRouter from "./router";
import ScrollToTop from "./components/scroll-top";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <MainRouter />
      </Router>
      <ToastContainer />
    </>

  )
}

export default App
