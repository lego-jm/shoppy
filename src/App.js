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
          <div className="border-b">
            <Header />
          </div>
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
          <Footer />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
