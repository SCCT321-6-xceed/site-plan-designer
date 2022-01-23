import Login from "./pages/Login.js";
import Registration from "./pages/Registration.js";
import Dashboard from "./pages/Dashboard.js";
import ViewPlan from "./pages/ViewPlan.js";
import Library from "./libraryComponent/Library.js";
import Export from "./pages/Export.js";
import Newpage from "./newpage/newpage.js";
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
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/dashboard" element ={<Dashboard />}/>
            <Route exact path="/library" element={<Library />} />
            <Route exact path="/registration" element={<Registration />}/>
            
            /* count stores total legend count */
            <Route exact path="/plandesign" element={<ViewPlan count={0}/>}/>
            <Route exact path="/export" element={<Export />}/>
            
            /* Newpage stores misc test files */
            <Route exact path="/newpage" element={<Newpage />}/>
          </Routes>
        </div>
        </ThemeProvider>
    </Router>
    </>
  );
}

export default App;
