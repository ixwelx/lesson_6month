import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Spin, Typography, Descriptions } from "antd";
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";

const { Title, Paragraph } = Typography;

export default function ProductDetail() {
    const { id } = useParams();
    const { productDetail, getProductById, isLoading } = useProductStore();
    const { addToCart } = useCartStore();

    useEffect(() => {
        getProductById(id);
    }, [id]);

    if (isLoading || !productDetail) {
        return <Spin/>;
    }

    return (
        <div style={{ padding: 24 }}>
            <Card
                cover={
                    <img
                        src={productDetail.image}
                        alt={productDetail.title}
                        style={{ maxHeight: 400, objectFit: "cover" }}
                    />
                }
            >
                <Title level={2}>{productDetail.title}</Title>
                <Paragraph>{productDetail.description}</Paragraph>

                <Descriptions column={1} size="small" style={{marginBottom: "7px"}}>
                    <Descriptions.Item label="Username">
                        {productDetail.user.username}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                        {productDetail.user.email}
                    </Descriptions.Item>
                </Descriptions>

                <Button
                    type="primary"
                    onClick={() => addToCart(productDetail.id)}
                >
                    Add to cart
                </Button>
            </Card>
        </div>
    );
}
