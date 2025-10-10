import { faker } from '@faker-js/faker';

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function sleepInWhile(duration) {
    let x = 0;
    while (x < duration) {
        ++x;
    }
}

export function generateToken() {
    return faker.string.uuid();
}

export function generateUser() {
    console.log(faker.person.email);
    const user = {
        "id": randomIntFromInterval(0, 1000),
        "username": faker.person.fullName(),
        "email": faker.internet.email(),
        "role": faker.person.jobTitle(),
        "preferences": {
            "theme": "dark",
            "language": faker.location.language()
        }
    };
    return user;
}
export function generateProducts(amount) {
    return Array.from({ length: amount }, (_, i) => ({
        id: i + 1,
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price({ min: 5, max: 500 })),
        description: faker.commerce.productDescription(),
        leftAmount: faker.number.int({ min: 0, max: 500 }),
        boughtAmount: faker.number.int({ min: 0, max: 1000 }),
        category: faker.commerce.department(),
        rating: faker.number.float({ min: 1, max: 5, precision: 0.1 })
    }));
}
