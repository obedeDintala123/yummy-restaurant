"use client"

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/cards";
import { apiRequest } from "@/lib/api";
import { OrderForm } from "@/components/forms";
import { Toaster } from "@/components/ui/sonner";

export default function Menu() {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<{
        productName: string;
        price: number;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = () => {
            apiRequest("/api/menu")
                .then((data) => setProducts(data))
                .finally(() => setLoading(false));
        };

        fetchProducts();
        const interval = setInterval(fetchProducts, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-10 my-10 w-full">
            <h1 className={`text-3xl font-semibold text-yummy-terciary ${selectedProduct ? "hidden" : "block"}`}>Menu</h1>

            {selectedProduct ? (
                <div className="mt-20 w-full flex justify-center items-center">
                    <OrderForm
                        product={selectedProduct}
                        onSuccess={() => setSelectedProduct(null)}
                    />
                </div>
            ) : (
                <div>
                    {loading ? (
                        <div className="mt-10 text-center text-gray-400">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        title={product.title}
                                        src={product.src}
                                        description={product.description}
                                        price={product.price}
                                        onSelect={() =>
                                            setSelectedProduct({
                                                productName: product.title,
                                                price: product.price,
                                            })
                                        }
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-400">
                                    No products available
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            <Toaster />
        </div>
    );
}
