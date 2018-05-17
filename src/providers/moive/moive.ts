
import { Injectable } from '@angular/core';
import {Http} from "@angular/http"


/*
  Generated class for the MoiveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoiveProvider {
  private baseApiPath="https://api.themoviedb.org/3"


  constructor(public http: Http) {
    console.log('Hello MoiveProvider Provider');
  }


  getLatesMovies(){
    return this.http.get(this.baseApiPath+'/movie/latest?api_key='+this.getApiKey());
  }

  getApiKey():string{
    return 'a1e4cbe413273cdc3f7cb50a35aa10c6'
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath+'/movie/popular?api_key='+this.getApiKey());
  }

}
