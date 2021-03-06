import { City } from "./City";

export interface BostadsregistretHome {
    id:                               number;
    storedMatchingId:                 number;
    searchingFor:                     number;
    suburbId:                         number;
    suburbName:                       string;
    cityId:                           number;
    cityName:                         City;
    address:                          string;
    addressCity:                      string;
    contractType:                     number;
    contractLength:                   number;
    otherLength:                      string;
    area:                             number;
    rooms:                            number;
    rent:                             number;
    warm:                             number;
    elevator:                         boolean;
    balcony:                          boolean;
    floor1Sub:                        boolean;
    floor1Ground:                     boolean;
    floor1Stairs:                     boolean;
    attic:                            boolean;
    duplex:                           boolean;
    furnished:                        boolean;
    entryDate:                        string;
    floor:                            number;
    reference:                        string;
    postalCode:                       string;
    otherInfo:                        string;
    adText:                           string;
    statusText:                       string;
    statusCode:                       number;
    hidden:                           boolean;
    comments:                         string;
    mayManageApplicants:              boolean;
    registerIdSelectedByLandlord:     number;
    rented:                           number;
    cancelled:                        number;
    copyright:                        string;
    timeWhenLandlordMaySeeApplicants: number;
}