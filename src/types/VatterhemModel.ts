export interface VatterhemResult {
    Result:                     VatterhemModel[];
    TotalCount:                 number;
    ObjectMainGroupDescription: string;
    ObjectMainGroupNo:          number;
}

export interface VatterhemModel {
    ObjectMainGroupDescription:           null;
    ObjectSubGroupDescription:            null;
    RowId:                                string;
    SyndicateNo:                          number;
    CompanyNo:                            number;
    AreaNo:                               string;
    HouseNo:                              string;
    EntranceNo:                           string;
    ObjectNo:                             string;
    ObjectMainGroupNo:                    number;
    ObjectSubGroupNo:                     number;
    ObjectTypeDescription:                string;
    ObjectAreaSort:                       number;
    ObjectSubDescription:                 ObjectSubDescription;
    ObjectArea:                           string;
    ObjectFloor:                          string;
    SeekAreaNo:                           number;
    MarketPlaceNo:                        number;
    HouseFormNo:                          null;
    PropertyNo:                           number | null;
    RentPerMonthSort:                     number;
    RentPerMonth:                         string;
    FirstEstateImageUrl:                  string;
    BoardNo:                              string;
    Description:                          string;
    PlaceName:                            PlaceName;
    SeekAreaDescription:                  string;
    StreetName:                           string;
    StreetNo:                             number;
    StreetChar:                           StreetChar;
    MarketPlaceDescription:               MarketPlaceDescription;
    CountInterest:                        number;
    FirstInfoTextShort:                   string;
    FirstInfoText:                        string;
    EndPeriodMP:                          Date;
    EndPeriodMPDateString:                string;
    QueueDate:                            Date;
    QueueDateString:                      Date;
    QueuePoints:                          number;
    QueuePositionCut:                     number;
    FreeFrom:                             Date;
    DesiredFreeFrom:                      Date | null;
    DesiredFreeFromString:                string;
    SeekAreaUrl:                          string;
    Latitude:                             string;
    Longitude:                            string;
    ArriveMarketPlace:                    Date;
    ArriveMarketPlaceDateString:          Date;
    PublishingDate:                       Date;
    PublishingDateString:                 Date;
    IsTradingAdvertisement:               boolean;
    StatusDescriptionClient:              StatusDescriptionClient;
    UseFilter:                            number;
    SyndicateHouseFormDescriptionGrouped: null;
    SyndicatePropertyDescriptionGrouped:  null | string;
    MapUrl:                               string;
    QueueCutShow:                         number;
    Street:                               string;
    InterestOpens:                        null;
    InterestOpensDateString:              string;
    SyndicateMarketPlaceImageAlt:         string;
    RankUpInSearchResult:                 boolean;
    SellerNote:                           string;
    Properties:                           string;
    HouseForms:                           string;
    ObjectTags:                           ObjectTag[];
    GroundRent:                           string;
}

export enum MarketPlaceDescription {
    Torget = "Torget",
}

export enum ObjectSubDescription {
    The1Rum = "1 Rum",
    The2Rum = "2 Rum",
    The3Rum = "3 Rum",
    The4Rum = "4 Rum",
    The5Rum = "5 Rum",
    The6Rum = "6 Rum"
}

export interface ObjectTag {
    TagNo:              number;
    CompanyNo:          number;
    ObjectNo:           string;
    TagText:            string;
    TagTextEng:         string;
    TagBackgroundColor: string;
    TagTextColor:       string;
}

export enum PlaceName {
    Huskvarna = "Huskvarna",
    Jönköping = "Jönköping",
}

export enum StatusDescriptionClient {
    InfoIntresseanm = "Info & intresseanm",
}

export enum StreetChar {
    B = "B",
    Empty = "",
    F = "F",
}