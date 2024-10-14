import { ThemeProvider } from "@/components/theme-provider"
import Home from "@/pages/Home";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
