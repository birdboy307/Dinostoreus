import { Client, Environment } from "square";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const client = new Client({
            environment: Environment.Sandbox,
            accessToken: process.env.SQUARE_ACCESS_TOKEN,
        })

        try {
            const response = await client.catalogApi.listCatalog(undefined,
            'ITEM_VARIATION');
          
            console.log(response.result);
        } catch(error) {
            console.log(error);
        }
        console.log(response.result.objects);
        res.json({data: response.result.objects});
    }
    else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}