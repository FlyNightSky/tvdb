import * as cheerio from 'cheerio';
import axios from 'axios';
import { IAnimeByPageResult, IAnimeLogoResult, IAnimePageInfo } from '../types/Interface.js';

export async function scraper(url: string, type: 'page'| 'info'){
  if(type == 'page'){
    const data = (await axios.get(url)).data;
    if(data){
      const $ = cheerio.load(data);
      const animes = [];

      $('tr').each((index, element) => {
        const idLink = $(element).find('a').attr('href');
        const id = idLink ? idLink.replace(/\/series\//, '/') : '';
        const result = {
          index: index,
          title: $(element).find('a').text(),
          id: id.split('/').pop(),
          startDate: $(element).find('td').eq(1).text(),
          endDate: $(element).find('td').eq(2).text()
        };
        animes.push(result)
      });
      const pageInfo = {
        results: animes.length,
      };
      const result: IAnimeByPageResult = {
        InformationPage: pageInfo,
        animeResults: animes as IAnimePageInfo[],
      };
      return result;
    }else{
      console.log(data)
    }
  }else{
    const data = (await axios.get(url+"#artwork")).data;
    if(data){
      const $ = cheerio.load(data);
      const backgrounds = [];
      const clearlogos = [];
      const icons = [];

      $('#artwork-backgrounds > div a').each((index, element) => {
        const image = {
          index: index,
          image: $(element).attr('href')
        }
        backgrounds.push(image);
      });
      $('#artwork-clearlogo > div a').each((index, element) => {
        const image = {
          index: index,
          image: $(element).attr('href')
        }
        clearlogos.push(image);
      });
      $('#artwork-icons > div a').each((index, element) => {
        const image = {
          index: index,
          image: $(element).attr('href')
        }
        icons.push(image);
      });

      const ImageResults: IAnimeLogoResult = {
        Backgrounds: backgrounds,
        ClearLogos: clearlogos,
        Icons: icons,
      }
      return ImageResults
    }else{
      console.log("Error: :/")
    }
  }
}
