const ages = [19, 8, 20, 22, 1, 100, 19, 14];

// export const predicate = (age: number) => age > 90;

const oldAges = [100]; // > 90

export type CourseType = {
    title: string
    price: number
}

const courses: Array<CourseType> = [
    {title: "css", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150},
]


// < 160
// export const cheapPredicate = (course: CourseType) => {
//     return course.price < 160;
// }
