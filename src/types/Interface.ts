import { Type, StatusType, NetworkType, YearType } from "./querys.js";

export interface IAnimeLogoResult {
  Backgrounds: string[] | undefined;
  Banners: string[] | undefined;
  Cinemagraphs: string[] | undefined;
  ClearArts: string[] | undefined;
  ClearLogos: string[] | undefined;
  Icons: string[] | undefined;
  Posters: string[] | undefined;
}

export interface IAnimeLogoDataProps {
  tvdbID?: number | undefined;
  id: string | undefined;
}

export interface IAnimeByPageResult {
  name: string;
  id: string;
  url: string;
  FirstAired: string;
  LastAired: string;
}

export interface IAnimeLogoAdvSearch {
  query: { query: string | undefined, tvdbID: number | undefined, type?: Type, status?: StatusType, network?: NetworkType, year?: YearType };
  page?: number;
}
