"use client"

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/cards";
import { apiRequest } from "@/lib/api";

export default function Menu() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const fetchProducts = () => {
            apiRequest("/menu")
                .then((data) => {
                    setProducts(data);
                })
                .finally(() => setLoading(false));
        };

        fetchProducts();

        interval = setInterval(fetchProducts, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-10 my-10 w-full">
            <h1 className="text-3xl font-semibold text-yummy-terciary">Menu</h1>

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
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-400">
                            No products available
                        </div>
                    )
                    }
                </div>
            )}
        </div>
    );
}