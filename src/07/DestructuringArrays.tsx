import React, {useState} from 'react';

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

function useAlexState(message: string) {
    return [message, function(){}]
}

export const Destructuring: React.FC<PropsType> = ({title, man, ...restProps}) => {

  const [message, setMessage] = useState<string>("hello");

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
