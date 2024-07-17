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
    const responseToSend = {
        "message": "App is running",
        "status": "success",
        "data": null,
        "Device": "1",
        "Kuch": "bhi",
        "key": "value",
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4",
        "key5": "value5",
        "key6": "value6",
        "key7": "value7",
        "key8": "value8",
        "key9": "value9",
        "key10": "value10",
        "key11": "value11",
        "key12": "value12",
        "key13": "value13",
        "key14": "value14",
    };

    return res.status(200).json({
        status_code: 200,
        message: 'Success',
        error: null,
        result: responseToSend,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
