import { Layout, Menu} from "antd";
import {UserOutlined } from "@ant-design/icons";
import { Link} from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const { Header } = Layout;

export default function AppHeader() {
    const { isAuth } = useAuthStore();

    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
            >
                <Menu.Item key="/">
                    <Link to="/">Products</Link>
                </Menu.Item>

                <Menu.Item key="/cart">
                    <Link to="/cart">
                        Cart
                    </Link>
                </Menu.Item>

                {!isAuth ? (
                    <>
                        <Menu.Item key="/login">
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                        <Menu.Item key="/register">
                            <Link to="/register">Register</Link>
                        </Menu.Item>
                    </>
                ) : (
                    <Menu.Item key="/profile">
                        <Link to="/profile">
                            <UserOutlined />
                            Profile
                        </Link>
                    </Menu.Item>
                )}
            </Menu>
        </Header>
    );
}
