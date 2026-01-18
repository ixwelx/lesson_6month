import { Button, Form, Input, Alert } from "antd";
import { useAuthStore } from "../store/authStore.js";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const { login, isLoading, error } = useAuthStore();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {
        await login(form);
        if (!useAuthStore.getState().error) {
            navigate("/products")
        }
    };

    return (
        <div style={{ margin: "40px", display: "flex", justifyContent: "center" }}>
            <Form
                layout="vertical"
                onFinish={submit}
                style={{
                    minWidth: 500,
                    padding: "10px",
                    borderRadius: "6px",
                    boxShadow: "0 5px 24px rgba(0, 0, 0, 0.18)",
                }}
            >
                <h2>Login</h2>
                {error && (
                    <Alert
                        description={error}
                        type="error"
                        showIcon
                        style={{ marginBottom: 16 }}
                    />
                )}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}
                >
                    <Input onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={isLoading}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}