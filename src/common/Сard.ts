export enum ESuits {
    "Spades",
    "Hearts",
    "Diamonds",
    "Clubs",
}

export enum ECard {
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
    "Ace"
}

export enum ESuitsName {
    "Пики" = ESuits.Spades,
    "Черви" = ESuits.Hearts,
    "Бубны" = ESuits.Diamonds,
    "Трефы" = ESuits.Clubs,
}

export enum ECardName {
    "Семерка" = ECard.Seven,
    "Восьмерка" = ECard.Eight,
    "Девятка" = ECard.Nine,
    "Десятка" = ECard.Ten,
    "Валет" = ECard.Jack,
    "Дама" = ECard.Queen,
    "Король" = ECard.King,
    "Туз" = ECard.Ace
}

export type TDisplay = {
    suit: string,
    card: string
}

export class Card {
    public suit: ESuits;
    public card: ECard;
    public display: TDisplay;
    public img: string;
    public value: number;
    public isTrump: boolean;

    constructor(suit: ESuits, card: ECard) {
        this.suit = suit;
        this.card = card;
        this.value = this.setValue();
        this.display = {
            card: ECardName[this.card],
            suit: ESuitsName[this.suit]
        };
        this.img = `./${suit}_${card}.svg`;
        this.isTrump = false;
    }

    public setValue(): number {
        let value = 0;
        switch (this.card) {
            case ECard.Ace: {
                value = 11;
                break;
            }
            case ECard.King: {
                value = 4;
                break;
            }
            case ECard.Queen: {
                value = 3;
                break;
            }
            case ECard.Jack: {
                value = this.isTrump ? 20 : 2;
                break;
            }
            case ECard.Ten: {
                value = 10;
                break;
            }
            case ECard.Nine: {
                value = this.isTrump ? 14 : 0;
                break;
            }
            case ECard.Eight:
            case ECard.Seven: {
                value = 0;
            }
        }
        return this.value = value;
    }

    public setIsTrump(): void {
        this.isTrump = true;
        this.setValue();
    }
}
