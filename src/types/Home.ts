import { City } from "./City";

export interface Home {
    id:                               number;
    cityName:                         City;
    address:                          string;
    area:                             number;
    rooms:                            number;
    rent:                             number;
    floor:                            number;
    entryDate:                        string;
}