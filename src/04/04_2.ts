import {CityType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, streetTitle: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== streetTitle)
}
