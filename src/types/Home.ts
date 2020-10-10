import { City } from "./City";
import { DataSource } from "./DataSource";

export interface Home {
    id:                               string;
    city:                             City;
    partOfCity:                       string;
    address:                          string;
    area:                             number;
    rooms:                            number;
    rent:                             number;
    floor:                            number;
    entryDate:                        string;
    originalData: any;
    source: DataSource;
}