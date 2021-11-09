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

export function increaseAgeNew(u: UserType) {
    const copy = {
        ...u, age: u.age + 1
    }
    // copy.age = u.age + 1

    return copy
}

export const moveToAnotherAddress = (u: UserWithLaptopType, city: string) => {
    return {...u, address : {...u.address, city}}
}