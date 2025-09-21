import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import "./styles/globals.scss";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
