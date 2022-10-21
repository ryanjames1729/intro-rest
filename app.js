// Require modules
const express = require('express');
// Express Init
const app = express();

// Set port number
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Create a API route
app.get('/api', (req, res) => {
    // return 200 status code
    res.status(200).json({
        message: 'Hello World'}
    );
})

app.get('/hello/:name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://intro-rest.herokuapp.com/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({
        message: `Hello ${req.params.name}`
    });
}
)

