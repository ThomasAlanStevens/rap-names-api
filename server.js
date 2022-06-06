const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
    },
    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown',
    }
}

app.get('/', (req, res) =>{ 
    res.sendFile(__dirname + "/index.html")
})

app.get('/api', (req, res) => {
    res.json(rappers)
})

app.get('/api/:name', (req, res) => {
    let rapper = req.params.name.toLowerCase()
    rappers[rapper] ? res.json(rappers[rapper]) : res.json(rappers['Unknown'])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})