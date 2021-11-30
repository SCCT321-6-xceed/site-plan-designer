import Login from "./pages/Login.js";
import Registration from "./pages/Registration.js";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <ThemeProvider theme={theme}>
        <div className="form-content">
          <Routes>
            <Route exact path="/Login" element={<Login />}/>
            <Route exact path="/registration" element={<Registration />}/>
          </Routes>
        </div>
        </ThemeProvider>
    </Router>
     
    </>
  );
}

export default App;
