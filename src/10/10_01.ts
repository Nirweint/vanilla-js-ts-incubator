export type UserType = {
    name: string
    age: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: Array<{ title: string, id: number}>
}

export function increaseAgeNew(u: UserType) {
    const copy = {
        ...u, age: u.age + 1
    }
    // copy.age = u.age + 1

    return copy
}

export const moveToAnotherAddress = (u: UserWithLaptopType, city: string) => {
    return {...u, address : {...u.address, city: city}}
}

export const moveUSerToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {...u, address : {...u.address, house: house}}
}

export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) => {
    return {...u, laptop: {...u.laptop, title: title}}
}

export const upgradeUserBooks = (u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) => {
    return {...u, books: [...u.books, ...newBooks]}
}

export const addNewCompany = (u: UserWithLaptopType & UserWithBooksType & WithCompaniesType, newCompany: string) => {
    return {...u, companies: [...u.companies, {title: newCompany, id: 4}]}
}