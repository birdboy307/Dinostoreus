import { Client, Environment } from "square";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
    const order = req.body.info
    const price = BigInt(order.price)

    const client = new Client({
      environment: Environment.Sandbox,
      accessToken: process.env.SQUARE_ACCESS_TOKEN,
    })

    let uuid = crypto.randomUUID();

    try {
      const response = await client.checkoutApi.createCheckout('LGZSW7D2EASAY',
      {
        idempotencyKey: uuid,
        order: {
          order: {
            locationId: 'LGZSW7D2EASAY',
            lineItems: [
              {
                name: order.name,
                quantity: '1',
                itemType: 'ITEM',
                basePriceMoney: {
                  amount: price,
                  currency: 'AUD'
                }
              }
            ],
            pricingOptions: {
              autoApplyDiscounts: false,
              autoApplyTaxes: false
            }
          },
          idempotencyKey: uuid
        },
        askForShippingAddress: true,
        merchantSupportEmail: 'example@example.com',
        redirectUrl: 'https://dinostoreus.vercel.app'
      });
      res.json({url: response.result.checkout.checkoutPageUrl});
    
    } catch (error) {
      console.log(error);
    }

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}