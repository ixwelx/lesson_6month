import { useEffect, useState } from "react";
import { Card, Avatar, Typography, List, Input, Button, Space} from "antd";
import { UserOutlined, PlusOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAuthStore } from "../store/authStore.js";
import { useCategoryStore } from "../store/categoryStore.js";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export default function Profile() {
    const { profile, getProfile, logout } = useAuthStore();
    const { categories, getCategories, createCategory, isLoading } = useCategoryStore();
    const navigate = useNavigate();

    const [newCategory, setNewCategory] = useState("");
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        getProfile();
        getCategories();
    }, []);

    const handleAddCategory = async () => {
        if (!newCategory.trim()) return;
        setAdding(true);
        await createCategory(newCategory);
        setNewCategory("");
        setAdding(false);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
            <Card
                style={{ width: 600 }}
                title={
                    <Space align="center">
                        <Avatar size={64} icon={<UserOutlined />} />
                        <div>
                            <Title level={4}>{profile?.username}</Title>
                            <Text type="secondary">{profile?.email}</Text>
                        </div>
                    </Space>
                }
                extra={
                    <Button danger icon={<LogoutOutlined />} onClick={handleLogout}>
                        Logout
                    </Button>
                }
            >
                <Title level={5}>Categories</Title>

                <List
                    loading={isLoading}
                    bordered
                    dataSource={categories}
                    renderItem={(item) => <List.Item>{item.title || item.name}</List.Item>}
                    style={{ marginBottom: 15 }}
                />

                <Space>
                    <Input
                        placeholder="Create category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        onPressEnter={handleAddCategory}
                    />
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        loading={adding}
                        onClick={handleAddCategory}
                    >
                        Add
                    </Button>
                </Space>
            </Card>
        </div>
    );
}
