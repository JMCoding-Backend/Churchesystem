import express from 'express';

const router = express.Router();

// Mock database for donations
let donations: any[] = [];

// Create a donation
router.post('/donations', (req, res) => {
    const newDonation = { id: donations.length + 1, ...req.body }; 
    donations.push(newDonation);
    res.status(201).json(newDonation);
});

// Get all donations
router.get('/donations', (req, res) => {
    res.json(donations);
});

// Get a donation by ID
router.get('/donations/:id', (req, res) => {
    const donation = donations.find(d => d.id === parseInt(req.params.id));
    if (!donation) return res.status(404).send('Donation not found');
    res.json(donation);
});

// Update a donation by ID
router.put('/donations/:id', (req, res) => {
    const donation = donations.find(d => d.id === parseInt(req.params.id));
    if (!donation) return res.status(404).send('Donation not found');

    Object.assign(donation, req.body);
    res.json(donation);
});

// Delete a donation by ID
router.delete('/donations/:id', (req, res) => {
    const donationIndex = donations.findIndex(d => d.id === parseInt(req.params.id));
    if (donationIndex === -1) return res.status(404).send('Donation not found');

    donations.splice(donationIndex, 1);
    res.status(204).send();
});

// Get statistics on donations
router.get('/donations/stats', (req, res) => {
    const totalDonations = donations.length;
    const totalAmount = donations.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    res.json({ totalDonations, totalAmount });
});

export default router;
