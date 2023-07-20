import { ObjectId } from "mongodb"

export class Address {
    constructor(
        public street: string,
        public number: number
    ) {}
}

export class User {
    constructor(
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public id?: ObjectId,
        public address?: Address
    ) {}
}

export class Game {
    constructor(
        public name: string,
        public id?: ObjectId,
        public token?: string
    ) {}
}
