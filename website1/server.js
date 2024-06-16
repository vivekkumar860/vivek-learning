const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Endpoint to get products
app.get('/products', (req, res) => {
    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to update products
app.post('/products', (req, res) => {
    const newProducts = req.body;

    fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(newProducts, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to products file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(newProducts);
    });
});

// Endpoint to add a new product
app.post('/add-product', (req, res) => {
    const newProduct = req.body;

    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const products = JSON.parse(data);
        products.push(newProduct);

        fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to products file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(products);
        });
    });
});

// Endpoint to delete a product
app.delete('/delete-product/:id', (req, res) => {
    const productId = req.params.id;

    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        let products = JSON.parse(data);
        products = products.filter(product => product.id !== productId);

        fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to products file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(products);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
