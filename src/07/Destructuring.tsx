import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

type LessonType = {
    title: string
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const Destructuring: React.FC<PropsType> = ({title, man, ...restProps}) => {

    // const {title, man: {name}} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
                {restProps.car.model}
            </div>
        </div>
    );
}
