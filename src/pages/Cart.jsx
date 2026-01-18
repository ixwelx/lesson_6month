import { useEffect } from "react";
import { List, Button, Typography, Empty } from "antd";
import { useCartStore } from "../store/cartStore";

const { Title } = Typography;

export default function Cart() {
    const { cart, getCart, removeFromCart } = useCartStore();

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div style={{ padding: 24 }}>
            <Title level={2}>Cart</Title>

            {cart.length === 0 ? (
                <Empty description="Cart is empty" />
            ) : (
                <List
                    dataSource={cart}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button
                                    danger
                                    onClick={() =>
                                        removeFromCart(item.product.id)
                                    }
                                >
                                    Remove
                                </Button>,
                            ]}
                        >
                            <List.Item.Meta
                                title={item.product.title}
                                description={item.product.description}
                            />
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
}
