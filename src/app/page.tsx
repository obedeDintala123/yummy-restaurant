import { OrderCard } from "@/components/cards";
import { Header } from "@/components/header";
import { HeroSlider } from "@/components/hero-slider";
import { Button } from "@/components/ui/button";

export default function Home() {

  const orderCards = [
    { src: "/order-image1.svg", alt: "order-image2", title: "Easy To Order", description: "You Only Need A Few Steps In Ordering Food" },
    { src: "/order-image2.svg", alt: "order-image1", title: "Fastest Delivery", description: "Delivery That Is Always Ontime Even Faster" },
    { src: "/order-image3.svg", alt: "order-image3", title: "Good Quality", description: "Not Only Fast For Us Quality Is Also Number One" },

  ]

  return (
    <>
      <div className="min-h-screen">
        <Header />

        <div className="grid grid-cols-[30%_70%] px-20 mt-10">
          <section className="flex flex-col gap-10">
            <h1 className="text-7xl font-semibold leading-24 text-yummy-terciary">Enjoy Your Healthy Delicious Food</h1>

            <div className="flex gap-10">
              <Button className="w-2/6 py-6 rounded-full bg-yummy-primary font-semibold">Menu</Button>
              <Button variant={"outline"} className="w-2/6 py-6 rounded-full text-yummy-terciary bg-transparent font-semibold">Book a table</Button>
            </div>
          </section>

          <section className="flex justify-end w-full items-center">
            <HeroSlider />
          </section>
        </div>
      </div>

      <div className="px-20 mt-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-5xl text-yummy-terciary text-center">Best <span className="text-yummy-primary">Quality Food</span></h2>
          <h2 className="font-semibold text-5xl text-yummy-terciary text-center">Order Now</h2>
        </div>

        <div className="w-full flex justify-between">
          <OrderCard orderCard={orderCards} />
        </div>
      </div>
    </>
  )
}