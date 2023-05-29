import {Card, ESuits} from "./Сard";

// Генерация колоды
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

export class Deck {
    public deck: Card[];

    constructor(deck: Card[]) {
        this.deck = deck;
    }

    // Добавляем карту в колоду
    public addToDeck(card: Card): void {
        this.deck.push(card);
    }

    // Удаляем карту из масти
    public removeCardFromDeck(card: Card): Card {
        this.deck = this.deck.filter((cardOfDeck) => cardOfDeck != card);
        return card;
    }

    // Устанавливаем козырную масть
    public setTrump(trumpSuit: ESuits): void {
        for (const card of this.deck) {
            if (card.suit == trumpSuit) {
                card.setIsTrump();
            }
        }
    }

    // Устаналиваем досутпность карт по масти в колоде для действий
    public setAvailable(availableSuit: ESuits, available: boolean = false): Card[] {
        for (const card of this.deck) {
            if (card.suit == availableSuit) {
                card.setIsAvailable(available);
            }
        }

        return this.deck.filter((card) => card.isAvailable == available)
    }

    // Устанавливаем досутпность всем мастям в колоде для действий
    public setAllAvailable(available: boolean = false) {
        for (let suit = 3; suit >= 0; suit--) {
            this.setAvailable(ESuits[ESuits[suit]], available)
        }
    }
}
