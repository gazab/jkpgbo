import { Home } from "../types/Home";
import { ObjectSubDescription, VatterhemModel, VatterhemResult } from "../types/VatterhemModel";

const apiUrl = "https://raw.githubusercontent.com/gazab/vatterhem_history/main/vatterhem.json";
const idPrefix = "vh";

export function getVatterhemData(): Promise<Home[]> {
    return fetch(apiUrl).then(res => res.json().then((data: VatterhemResult) => data.Result.map(x => mapVatterhemModelToHome(x))));
}

function mapVatterhemModelToHome(input: VatterhemModel): Home {
    let output: Home = {
        address: input.StreetName + " " + input.StreetNo,
        cityName: input.PlaceName,
        id: idPrefix+input.RowId,
        area: input.ObjectAreaSort,
        rent: input.RentPerMonthSort,
        rooms: typeDescriptionToRooms(input.ObjectSubDescription),
        floor: Number.parseInt(input.ObjectFloor),
        entryDate: input.EndPeriodMPDateString,
        source: "Vätterhem",
        originalData: null,
    }
    output.originalData = input;
    output.source = "Vätterhem";
    return output;
}

function typeDescriptionToRooms(typeDesc: ObjectSubDescription): number {
    switch(typeDesc) {
        case "1 Rum": return 1;
        case "2 Rum": return 2;
        case "3 Rum": return 3;
        case "4 Rum": return 4;
        case "5 Rum": return 5;
        case "6 Rum": return 6;
        default: return 0;
    }
}