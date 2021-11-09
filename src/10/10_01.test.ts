import {increaseAgeNew, moveToAnotherAddress, UserType, UserWithLaptopType} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
        },
    }

    const olderUser = increaseAgeNew(user)

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