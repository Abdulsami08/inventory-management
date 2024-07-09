// // pages/api/products/index.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// // import db from '../../../lib/db';
// // import { Product } from '../../../models/Product';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const result = await db.query<Product>('SELECT * FROM products');
//     res.status(200).json(result.rows);
//   } else if (req.method === 'POST') {
//     const { name, price, sale_price, stock } = req.body;
//     const result = await db.query(
//       'INSERT INTO products (name, price, sale_price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, price, sale_price, stock]
//     );
//     res.status(201).json(result.rows[0]);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
