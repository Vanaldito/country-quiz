export interface CountryData {
  name: string;
  capital: string;
  flagUrl: string;
}

export interface QuestionInfo {
  type: "capital" | "flag";
  statement: string;
  options: Array<string>;
  correctOption: string;
  flagUrl?: string;
}
