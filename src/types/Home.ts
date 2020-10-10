import { City } from "./City";
import { DataSource } from "./DataSource";

export interface Home {
    id:                               string;
    cityName:                         City;
    address:                          string;
    area:                             number;
    rooms:                            number;
    rent:                             number;
    floor:                            number;
    entryDate:                        string;
    originalData:                     any;
    source: DataSource;
}