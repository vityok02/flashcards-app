const Deck = require('./models/deck');

const express = require('express');
const app = express();
const port = 3000;

const decks = [];

app.post('/decks', express.json(), (req, res) => {
    var deck = createDeck(req.body.name, req.body.description ?? null);

    res.status(201).json(deck);
});

app.get('/decks', (req, res) => {
    res.json(decks);
});

app.get('/decks/:id', (req, res) => {
    var deck = getById(req.params.id);

    if (!deck) {
        return res.status(404).send('Deck not found');
    }

    res.json(deck);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function createDeck(deckName, description) {
    let lastId = 0;
    if (decks.length < 1 || decks == undefined)
    {
        lastId = 0;
    }
    else
    {
        lastId = decks[decks.length - 1].id;
    }

    const id = lastId + 1;
    const deck = new Deck(id, deckName, description);
    decks.push(deck);
    return deck;
}

function getById(id) {
    return decks.find(d => d.id == id);
}