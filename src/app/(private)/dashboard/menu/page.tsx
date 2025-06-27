import { ProductCard } from "@/components/cards";

export default function Menu() {

    const products = [
        { title: "Produto 1", src: "/product1.jpg", description: "Produto 1", price: 24 },
        { title: "Produto 2", src: "/product2.jpg", description: "Produto 2", price: 24 },
        { title: "Produto 3", src: "/product3.jpg", description: "Produto 3", price: 24 },
        { title: "Produto 4", src: "/product4.jpg", description: "Produto 4", price: 24 },
        { title: "Produto 5", src: "/product1.jpg", description: "Produto 5", price: 26 },
        { title: "Produto 6", src: "/product2.jpg", description: "Produto 6", price: 28 },
        { title: "Produto 7", src: "/product3.jpg", description: "Produto 7", price: 22 },
        { title: "Produto 8", src: "/product4.jpg", description: "Produto 8", price: 30 },
        { title: "Produto 9", src: "/product1.jpg", description: "Produto 9", price: 25 },
        { title: "Produto 10", src: "/product2.jpg", description: "Produto 10", price: 27 },
        { title: "Produto 11", src: "/product3.jpg", description: "Produto 11", price: 29 },
        { title: "Produto 12", src: "/product4.jpg", description: "Produto 12", price: 21 },
        { title: "Produto 13", src: "/product1.jpg", description: "Produto 13", price: 23 },
        { title: "Produto 14", src: "/product2.jpg", description: "Produto 14", price: 24 },
        { title: "Produto 15", src: "/product3.jpg", description: "Produto 15", price: 26 },
        { title: "Produto 16", src: "/product4.jpg", description: "Produto 16", price: 28 },
        { title: "Produto 17", src: "/product1.jpg", description: "Produto 17", price: 22 },
        { title: "Produto 18", src: "/product2.jpg", description: "Produto 18", price: 30 },
        { title: "Produto 19", src: "/product3.jpg", description: "Produto 19", price: 25 },
        { title: "Produto 20", src: "/product4.jpg", description: "Produto 20", price: 27 },
        { title: "Produto 21", src: "/product1.jpg", description: "Produto 21", price: 29 },
        { title: "Produto 22", src: "/product2.jpg", description: "Produto 22", price: 21 },
        { title: "Produto 23", src: "/product3.jpg", description: "Produto 23", price: 23 },
        { title: "Produto 24", src: "/product4.jpg", description: "Produto 24", price: 24 },
        { title: "Produto 25", src: "/product1.jpg", description: "Produto 25", price: 26 },
        { title: "Produto 26", src: "/product2.jpg", description: "Produto 26", price: 28 },
        { title: "Produto 27", src: "/product3.jpg", description: "Produto 27", price: 22 },
        { title: "Produto 28", src: "/product4.jpg", description: "Produto 28", price: 30 },
        { title: "Produto 29", src: "/product1.jpg", description: "Produto 29", price: 25 },
        { title: "Produto 30", src: "/product2.jpg", description: "Produto 30", price: 27 },
        { title: "Produto 31", src: "/product3.jpg", description: "Produto 31", price: 29 },
        { title: "Produto 32", src: "/product4.jpg", description: "Produto 32", price: 21 },
        { title: "Produto 33", src: "/product1.jpg", description: "Produto 33", price: 23 },
        { title: "Produto 34", src: "/product2.jpg", description: "Produto 34", price: 24 },
        { title: "Produto 35", src: "/product3.jpg", description: "Produto 35", price: 26 },
        { title: "Produto 36", src: "/product4.jpg", description: "Produto 36", price: 28 },
        { title: "Produto 37", src: "/product1.jpg", description: "Produto 37", price: 22 },
        { title: "Produto 38", src: "/product2.jpg", description: "Produto 38", price: 30 },
        { title: "Produto 39", src: "/product3.jpg", description: "Produto 39", price: 25 },
        { title: "Produto 40", src: "/product4.jpg", description: "Produto 40", price: 27 },
        { title: "Produto 41", src: "/product1.jpg", description: "Produto 41", price: 29 },
        { title: "Produto 42", src: "/product2.jpg", description: "Produto 42", price: 21 },
        { title: "Produto 43", src: "/product3.jpg", description: "Produto 43", price: 23 },
        { title: "Produto 44", src: "/product4.jpg", description: "Produto 44", price: 24 },
        { title: "Produto 45", src: "/product1.jpg", description: "Produto 45", price: 26 },
        { title: "Produto 46", src: "/product2.jpg", description: "Produto 46", price: 28 },
        { title: "Produto 47", src: "/product3.jpg", description: "Produto 47", price: 22 },
        { title: "Produto 48", src: "/product4.jpg", description: "Produto 48", price: 30 },
        { title: "Produto 49", src: "/product1.jpg", description: "Produto 49", price: 25 },
        { title: "Produto 50", src: "/product2.jpg", description: "Produto 50", price: 27 },
        { title: "Produto 51", src: "/product3.jpg", description: "Produto 51", price: 29 },
        { title: "Produto 52", src: "/product4.jpg", description: "Produto 52", price: 21 },

    ];

    return (
        <div className="px-10 my-10 w-full">
            <h1 className="text-3xl font-semibold text-yummy-terciary">Menu</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        src={product.src}
                        description={product.description}
                        price={product.price}
                    />
                ))}

            </div>
        </div>
    )
}