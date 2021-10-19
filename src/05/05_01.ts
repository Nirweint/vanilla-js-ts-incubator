export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitriy Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css, html", "js", "ttd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})

const devs = [
    {
        stack: ["css, html", "js", "ttd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov",
    },
    {
        stack: ["css, html", "js", "ttd", "react"],
        firstName: "Alexander",
        lastName: "Petrov",
    },
    {
        stack: ["css, html", "js", "ttd", "react"],
        firstName: "Dmitriy",
        lastName: "Sidorov",
    },

]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const dev2 = [
    d1, d2, d3
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
    stack: ["css, html", "js", "ttd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))

export const messages = people.map(man => `I'm ${man.name.split(" ")[0]}, and i ${man.age} years old.`)
