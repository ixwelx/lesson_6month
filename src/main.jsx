import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from "antd";

createRoot(document.getElementById('root')).render(
    // <ConfigProvider
    //     theme={{
    //         token: {
    //             colorPrimary: "#7f3fbf",
    //             colorBgBase: "#0f0b14",
    //             colorTextBase: "#e8dff5",
    //             borderRadius: 10,
    //         },
    //     }}
    // >
        <App />
    // </ConfigProvider>
)
