import { CountryData } from "../types";

export async function getCountriesData(): Promise<Array<CountryData>> {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const data: Array<{
    name: { common: string };
    capital?: Array<string>;
    flags: { png: string };
  }> = await res.json();

  return data
    .filter(info => "capital" in info) // Antarctica, Bouvet Island, Heard Island and McDonald Islands, and Macau don't have capital
    .map(info => ({
      name: info.name.common,
      capital: (info.capital as Array<string>)[0],
      flagUrl: info.flags.png,
    }));
}
