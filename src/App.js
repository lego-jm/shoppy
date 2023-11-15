import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";

const client = new QueryClient();

function App() {
  return (
    <div className="app-container">
      <ReactNotifications />
      <QueryClientProvider client={client}>
        <AuthContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
