import express, { Express, Request, Response } from 'express';
import memberRoutes from './routes/members';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', memberRoutes);

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'Church System is running!' });
});

app.listen(port, () => {
    console.log(`Church Management System running on port ${port}`);
});