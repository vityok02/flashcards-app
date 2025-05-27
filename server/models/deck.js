class Deck {
    id;
    name;
    description = null;
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cards = [];
    }

    toString() {
        return `Deck: ${this.name}\nDescription: ${this.description}`;
    }
}

module.exports = Deck;