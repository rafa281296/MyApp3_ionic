import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  IrParaMovies(){
    this.navCtrl.push(MoviesPage)
  }

}
