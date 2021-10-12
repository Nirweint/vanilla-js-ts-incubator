type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechnologiesType>
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type LocalAddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

const student: StudentType = {
    name: "Alexander",
    id: 1,
    age: 24,
    isActive: true,
    address: {
        streetTitle: "Yanischits 20",
        city: {
            title: "Pinsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        },
        {
            id: 4,
            title: "React"
        },
    ]
}


console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[3].title)