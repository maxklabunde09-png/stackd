import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { slotId, service, time } = await req.json();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Deposit — ${service}`,
            description: `${time} · Booking deposit`,
          },
          unit_amount: 2000, // $20.00
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${baseUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/book/cancel`,
    metadata: { slotId: String(slotId), service, time },
  });

  return NextResponse.json({ url: session.url });
}
