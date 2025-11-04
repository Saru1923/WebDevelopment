// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data for cart items
const cartItems = [
    {
        id: 1,
        name: "Bouquet of Roses",
        price: 30,
        image: "RoseBouquet.jpeg"
    },
    {
        id: 2,
        name: "Sunflower Bouquet",
        price: 25,
        image: "sunflowerbouquet.jpeg"
    },
    {
        id: 3,
        name: "Mixed Flower Bouquet",
        price: 35,
        image: "mixedflower.jpeg"
    },
    {
        id: 4,
        name: "Lily Bouquet",
        price: 40,
        image: "lilybouquet.jpeg"
    }
];

// Route to handle order placement
app.post('/place-order', (req, res) => {
    const { name, location, orderNo, paymentNo, amount, upi } = req.body;

    // Generate a unique order number and payment number
    const generatedOrderNo = `ORD${Math.floor(Math.random() * 1000)}`;
    const generatedPaymentNo = `PAY${Math.floor(Math.random() * 10000)}`;

    // Send back the order details
    res.json({
        name:randomName,
        message: "Your order has been placed successfully!",
        orderNo: generatedOrderNo,
        paymentNo: generatedPaymentNo,
        amount: amount
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
