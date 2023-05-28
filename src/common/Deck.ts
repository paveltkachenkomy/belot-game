import {Card, ESuits} from "./Сard";

const DeckGenerate = (persone: number = 4): Card[] => {
    const deckLength = persone == 4 ? 32 : 24;
    let  deck: Card[] = [];
    for (let suit = 3; suit >= 0; suit--) {
        for (let cards = deckLength/4 - 1; cards >= 0; cards--) {
            deck.push(new Card(suit, cards))
        }
    }

    return deck;
}

// export enum EDeclarations {
//     "AllSevens",
//     "AllEights",
//     "AllNines",
//     "AllTens",
//     "AllJacks",
//     "AllQueens",
//     "AllKings",
//     "AllAces",
//     "Bela",
//     "Terc",
//     ""
// }
//
// export enum EDeclarationsName {
//
// }

export class Deck {
    public deck: Card[];

    constructor(deck: Card[]) {
        this.deck = deck;
    }

    public addToDeck(card: Card): void {
        this.deck.push(card);
    }

    public removeFromDeck(card: Card): Card {
        this.deck = this.deck.filter((cardOfDeck) => cardOfDeck != card);
        return card;
    }

    public setTrump(trumpSuit: ESuits): void {
        for (const card of this.deck) {
            if (card.suit == trumpSuit) {
                card.setIsTrump();
            }
        }
    }
}
