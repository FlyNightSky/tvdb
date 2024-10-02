import { Type, StatusType, NetworkType, YearType } from "./querys.js";

export interface IAnimeLogoResult {
  Backgrounds: string[] | undefined;
  ClearLogos: string[] | undefined;
  Icons: string[] | undefined;
}


export interface IAnimePageInfo {
  index: number;
  title: string;
  id: string;
  startDate: string;
  endDate: string;
}

interface extraPageInfo {
  results: number | 'no results';
}

export interface IAnimeByPageResult {
  animeResults: IAnimePageInfo[];
  InformationPage: extraPageInfo;
}

export interface IAnimeLogoAdvSearch {
  query: { query: string | undefined, tvdbID: number | undefined, type?: Type, status?: StatusType, network?: NetworkType, year?: YearType };
  page?: number;
}
