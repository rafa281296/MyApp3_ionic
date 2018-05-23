import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovies(){
    return this.http.get(this.baseApiPath+'/movie/latest?api_key='+this.getApiKey());
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath+'/movie/popular?api_key='+this.getApiKey());
  }

  private getApiKey():string{
    return '559927f285be12730c0f5904148ed283';
  }
}
