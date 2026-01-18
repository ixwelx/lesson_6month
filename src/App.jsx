import Register from "./pages/Register.jsx";
import AppRouter from "./router/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import AppHeader from "./components/Header.jsx";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout.js";


function App() {

  return (
      <BrowserRouter>
          <Layout>
              <AppHeader/>
              {/*<Content>*/}
                <AppRouter/>
              {/*</Content>*/}
          </Layout>
      </BrowserRouter>

  )
}

export default App
