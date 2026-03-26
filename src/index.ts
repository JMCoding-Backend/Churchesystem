import memberRoutes from './routes/memberRoutes';
import donationRoutes from './routes/donationRoutes';
import websiteRoutes from './routes/websiteRoutes';

const app = require('express')();

app.use('/members', memberRoutes);
app.use('/donations', donationRoutes);
app.use('/website', websiteRoutes);

export default app;