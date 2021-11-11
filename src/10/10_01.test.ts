import {
    addNewCompany,
    increaseAgeNew,
    moveToAnotherAddress, moveUSerToOtherHouse, upgradeUserBooks,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
        },
    }

    const olderUser =    increaseAgeNew(user)

    expect(olderUser.age).toBe(33)
    expect(user.age).toBe(32)
    expect(olderUser.address).toBe(user.address)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Zenbook',
        }
    }

    const changedAddressUser = moveToAnotherAddress(user, "Kiev")

    expect(user).not.toBe(changedAddressUser)
    expect(user.address).not.toBe(changedAddressUser.address)
    expect(changedAddressUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(changedAddressUser.laptop)

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Zenbook',
        }
    }

    const userWithUpgradedLaptop = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userWithUpgradedLaptop)
    expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop)
    expect(user.laptop.title).toBe('Zenbook')
    expect(userWithUpgradedLaptop.laptop.title).toBe('Macbook')

})

test('move user to another house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Zenbook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userWithUpgradedHouse = moveUSerToOtherHouse(user, 99)

    expect(user).not.toBe(userWithUpgradedHouse)
    expect(user.laptop).toBe(userWithUpgradedHouse.laptop)
    expect(user.laptop.title).toBe('Zenbook')
    expect(user.books).toBe(userWithUpgradedHouse.books)
    expect(userWithUpgradedHouse.address.house).toBe(99)

})

test('upgrade books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Zenbook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userWithUpgradedBooks = upgradeUserBooks(user, ['ts', 'rest api'])

    expect(user).not.toBe(userWithUpgradedBooks)
    expect(user.laptop.title).toBe('Zenbook')
    expect(user.laptop).toBe(userWithUpgradedBooks.laptop)
    expect(user.address).toBe(userWithUpgradedBooks.address)
    expect(user.books).not.toBe(userWithUpgradedBooks.books)
    expect(userWithUpgradedBooks.books).toStrictEqual(['css', 'html', 'js', 'react', 'ts', 'rest api'])

})


test('upgrade companies', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Zenbook',
        },
        books: ['css', 'html', 'js', 'react'],
        companies: [
            {title: 'EPAM', id: 1},
            {title: 'it-incubator', id: 2},
            {title: 'ITechArt-Group', id: 3},
        ]
    }

    const userWithUpgradedCompanies = addNewCompany(user, "Wargaming")

    expect(user).not.toBe(userWithUpgradedCompanies)
    expect(user.laptop.title).toBe('Zenbook')
    expect(user.laptop).toBe(userWithUpgradedCompanies.laptop)
    expect(user.address).toBe(userWithUpgradedCompanies.address)
    expect(user.books).toBe(userWithUpgradedCompanies.books)
    expect(user.companies).not.toBe(userWithUpgradedCompanies.companies)
    expect(userWithUpgradedCompanies.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(userWithUpgradedCompanies.companies[3].title).toBe("Wargaming")
})