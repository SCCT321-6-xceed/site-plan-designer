import Login from "./pages/Login.js";
import Registration from "./pages/Registration.js";
import Dashboard from "./pages/Dashboard.js";
import Navbar from "./components/Navbar.js";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <div className="form-content">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route
                exact
                path="/Dashboard"
                element={
                  <>
                    <Navbar />
                    <Dashboard />
                  </>
                }
              />
              <Route exact path="/registration" element={<Registration />} />
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}
//Testing GIT

export default App;
