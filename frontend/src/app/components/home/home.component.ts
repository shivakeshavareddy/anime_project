import { Component, OnInit } from '@angular/core';
import { JikanSearchService } from 'src/app/services/jikan-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private animeSearch: JikanSearchService) { }
  search: string;
  results: any;
  lol: string;
  ngOnInit(): void {
  }

  
  async doSearch( name) {
   this.results= await this.animeSearch.searchAnime(name)
      .then(data => {
        // console.log(data.results)
        this.lol = "lol"
        return  data.results
      })
      // console.log(this.lol)
      console.log(this.results)
    }

}
