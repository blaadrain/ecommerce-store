"use client";

import CartItem from "@/components/cart-item";
import Summary from "@/components/summary";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {cart.products.length === 0 && (
              <p className="text-neutral-700">Your cart is empty</p>
            )}
            <ul className="divide-y">
              {cart.products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
