import { BostadsregistretHome } from "../types/BostadsregistretHome";
import { Home } from "../types/Home";

const apiUrl = "https://raw.githubusercontent.com/gazab/bostadsregistret_jkpg_history/main/bostadsregistret_jkpg.json";
const idPrefix = "br";

export function getBostadsregistretData(): Promise<Home[]> {
    return fetch(apiUrl).then(res => res.json().then((data: BostadsregistretHome[]) => data.map(x => mapBostadsregistretModelToHome(x))));
}

function mapBostadsregistretModelToHome(input: BostadsregistretHome): Home {
    let output: Home = {
        address: input.address,
        city: input.cityName,
        id: idPrefix+input.id,
        area: input.area,
        rent: input.rent,
        rooms: input.rooms,
        floor: input.floor,
        entryDate: input.entryDate,
        source: "Bostadsregistret",
        partOfCity: input.suburbName,
        originalData: input
    }
    return output;
}