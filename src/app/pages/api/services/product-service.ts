import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const servicesData = require('/json/product-services.json'); // Caminho para o arquivo JSON
  res.status(200).json(servicesData);
}