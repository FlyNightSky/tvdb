import express, { Request, Response } from 'express';
import { fetchAnimeLogoData, fetchAnimesByPage } from './functions/defined.js';

const app = express();
const PORT = 3000; // Or any port you'd like

// Define your route
app.get('/', async (req: Request, res: Response) => {
  const animePage = await fetchAnimeLogoData('fantastic-children'); // Fetch anime data
  req
  res.send(animePage);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
