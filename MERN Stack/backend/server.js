const express = require('express');

// express app
const app = express()

//routes

app.get('/', (req, res) => {
    res.json({messg: 'welcome to the app'})
})

//listen for requests

app.listen(5000, () => {
    console.log('listening on Poty 4000');
})