import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html'
})
export class AnimalPage {
  animal: any;
  currentTab = 'description';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.animal = navParams.get('animal');
  }

}
