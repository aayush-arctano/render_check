const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
// Increase payload size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const port = 5002;

// Routes
app.get('/', (req, res) => {
    console.log("App Pinged");
    return res.status(200).json({
        status_code: 200,
        message: 'Success',
        error: null,
        result: null,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
