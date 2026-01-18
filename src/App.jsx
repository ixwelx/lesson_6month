import Register from "./pages/Register.jsx";
import AppRouter from "./router/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import AppHeader from "./components/Header.jsx";
import {Layout} from "antd";


function App() {

  return (
      <BrowserRouter>
          <Layout>
              <AppHeader/>
                <AppRouter/>
          </Layout>
      </BrowserRouter>

  )
}

export default App
