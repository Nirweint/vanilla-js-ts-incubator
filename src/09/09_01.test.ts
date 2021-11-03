type UserType = {
    name: string
    age: number
    address: AddressType
}

type AddressType = {
    title: string
}

const increaseAge = (u: UserType) => {
    u.age++;
}


test('reference type test', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk',
        }
    }
    increaseAge(user)

    expect(user.age).toBe(33)
// ----------------------------------
    const superman = user
    superman.age = 1000
    increaseAge(user)
    expect(user.age).toBe(1001)
// ----------------------------------

})

test('array reference test', () => {

    const users = [
        {
            name: 'Dimych',
            age: 32,
        },
        {
            name: 'Alexander',
            age: 24,
        },
    ]

    const admins = users
    admins.push({name: 'Sofi', age: 20})

    expect(users[2]).toEqual({name: 'Sofi', age: 20})
})

test('value type test', () => {

    const usersCount = 100

    let adminsCount = usersCount

    adminsCount = 101

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)
})

test('array type test', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk',
        }
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary';

    expect(user.address.title).toBe("Kanary")
    expect(user.address.title).toBe(user2.address.title)
})

test('reference array test', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk',
        }
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: "Alex", age: 24, address: user.address}];
    const admins = [user, user2]

    admins[0].name = 'Dmitry';

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    sortingFunc(letters)
    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function sortingFunc(letters: any) {
    const copy = [...letters].sort();
    console.log(copy)
}
