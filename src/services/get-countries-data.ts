import { CountryData } from "../types";

export async function getCountriesData(): Promise<Array<CountryData>> {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const data: Array<{
    name: { common: string };
    capital?: Array<string>;
    flags: { png: string };
  }> = await res.json();

  return data.map(info => ({
    name: info.name.common,
    /* Antarctica, Bouvet Island, Heard Island and McDonald Islands, and Macau don't have capital */
    capital: (info.capital && info.capital[0]) ?? "Does not have",
    flagUrl: info.flags.png,
  }));
}
