import { Card, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const { Paragraph } = Typography;

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    const { addToCart } = useCartStore();

    return (
        <Card
            hoverable
            cover={
                <img
                    src={product?.image ? product?.image : 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'}
                    style={{ height: 250, objectFit: "cover" }}
                />
            }
            onClick={() => navigate(`/products/${product.id}`)}
        >
            <Card.Meta
                title={product.title}
                description={
                    <>
                        <Paragraph ellipsis={{ rows: 1 }}>
                            {product.description}
                        </Paragraph>

                        <Button
                            type="primary"
                            block
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product.id);
                            }}
                        >
                            Add to cart
                        </Button>
                    </>
                }
            />
        </Card>
    );
}
