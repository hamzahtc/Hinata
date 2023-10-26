import Blogs from "./components/Blogs/Blogs";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./stylesheet";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Blogs />
    </ThemeProvider>
  );
}
