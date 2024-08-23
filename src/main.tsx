import { createRoot } from "react-dom/client";
import RootRoute from "./routes/RootRoute";
import "./styles/GlobalStyle.css";

createRoot(document.getElementById("root")!).render(<RootRoute />);
