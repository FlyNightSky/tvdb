import {
  IAnimeLogoAdvSearch,
} from '../types/Interface.js';
import { scraper } from './scraper.js';

export let fetchAnimesByPage = async (page?: number | 0 ) => {
  console.log('Page:', page);
  console.log('Requested Url:', `https://thetvdb.com/genres/anime?page=${page}`)
  return scraper(`https://thetvdb.com/genres/anime?page=${page}`, 'page');
};

export let advancedSearch = (props: IAnimeLogoAdvSearch | undefined) => {
  console.log(props);
};

export let fetchAnimeLogoData = ( id: string | undefined, tvdbID?: number | undefined) => {
  const url = id? `https://thetvdb.com/series/${id}`: tvdbID? `https://www.thetvdb.com/dereferrer/series/${tvdbID}`: -1;
  if(url == -1){
    console.error('Error: One must be defined, TVDBID or ID');
    return "Error one of the following MUST be defined 'TVDBID' or 'ID'. If not defined it will cause this error"
  }else{
    return scraper(url, 'info');
  }
};

// Uncomment and implement these when needed
// export let fetchAnimeClearLogo = (page: number) => void;
// export let fetchAnimeBackground = (page: number) => void;
// export let fetchAnimeClearArts = (page: number) => void;

/* Will be added soon just not right now! */
