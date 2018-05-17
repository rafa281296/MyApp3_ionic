import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoiveProvider } from '../../providers/moive/moive';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [
    MoviesPage
  ]
})
export class MoviesPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoiveProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatesMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
