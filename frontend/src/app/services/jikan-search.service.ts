import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JikanSearchService {
  url: string = 'https://api.jikan.moe/v3'
  search: string='/search/anime?q='
  constructor() { }

  searchAnime(name) {
    return fetch(this.url + this.search + name)
      .then(res => res.json())
      .catch(error => console.log(error)
      )
      
  }


}
