export interface Donation {
    donorId: string; // Unique identifier for the donor
    amount: number; // Donation amount
    currency: string; // Currency of the donation (e.g., USD, EUR)
    donationType: string; // Type of donation (e.g., one-time, recurring)
    date: string; // Date of donation (ISO 8601 format)
    paymentMethod: string; // Payment method used (e.g., credit card, PayPal)
    status: string; // Status of the donation (e.g., completed, pending)
}