import { BostadsregistretHome } from "../types/BostadsregistretHome";
import { Home } from "../types/Home";

const apiUrl = "https://raw.githubusercontent.com/gazab/bostadsregistret_jkpg_history/main/bostadsregistret_jkpg.json";

export function getBostadsregistretData(): Promise<Home[]> {
    return fetch(apiUrl).then(res => res.json().then((data: BostadsregistretHome[]) => data.map(x => mapBostadsregistretModelToHome(x))));
}

function mapBostadsregistretModelToHome(input: BostadsregistretHome): Home {
    let output = input as unknown as Home;
    output.city = input.cityName;
    output.partOfCity = input.suburbName;
    output.source = "Bostadsregistret";
    return output;
}