import { useEffect, useMemo, useState } from "react";
import { List, Select, Spin, Typography } from "antd";
import { useProductStore } from "../store/productStore";
import { useCategoryStore } from "../store/categoryStore";
import ProductCard from "../components/ProductCard";

const { Title } = Typography;

export default function Products() {
    const { products, getProducts, isLoading } = useProductStore();
    const { categories, getCategories } = useCategoryStore();

    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!categoryId) return products;
        return products.filter(
            (p) => p.categoryId === categoryId
        );
    }, [products, categoryId]);

    return (
        <div style={{ padding: 25 }}>
            <Title level={2}>Products</Title>

            <Select
                placeholder="Filter by category"
                allowClear
                style={{ width: 240, marginBottom: 20 }}
                onChange={setCategoryId}
                options={categories.map((c) => ({
                    value: c.id,
                    label: c.title,
                }))}
            />

            {isLoading ? (
                <Spin />
            ) : (
                <List
                    grid={{ gutter: 25, column: 3 }}
                    dataSource={filteredProducts}
                    renderItem={(product) => (
                        <List.Item>
                            <ProductCard product={product} />
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
}
