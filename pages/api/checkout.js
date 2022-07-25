import { Client, Environment } from "square";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
    const order = req.body.product

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
                name: 'Chocolate Milk',
                quantity: '2',
                itemType: 'ITEM',
                basePriceMoney: {
                  amount: 2000,
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
        merchantSupportEmail: 'example@example.com',
        redirectUrl: 'http://localhost:3000'
      });
      res.redirect(303, response.result.checkout.checkoutPageUrl);
      console.log(response.result.checkout.checkoutPageUrl);
    
    } catch (error) {
      console.log(error);
    }

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}