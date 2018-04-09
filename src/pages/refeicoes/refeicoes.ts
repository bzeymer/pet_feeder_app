import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-refeicoes',
  templateUrl: 'refeicoes.html',
})
export class RefeicoesPage {

  proximaRefeicao: string;
  horaProximaRefeicao: moment.Moment;
  atrasado: boolean;

  refeicoes: Array<{
    type: string,
    time: moment.Moment,
    animals: Array<string>,
    user: string
  }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fetchProxRefeicao();
    this.fetchRefeicoesAnteriores();
  }

  fetchProxRefeicao() {
    this.proximaRefeicao = "Almoço";
    this.horaProximaRefeicao = moment("10/04/2018 12:00", "DD/MM/YYYY HH:mm");
    if (this.horaProximaRefeicao < moment()) {
      this.atrasado = true;
    } else {
      this.atrasado = false;
    }
  }

  fetchRefeicoesAnteriores(){
    this.refeicoes.push({type: 'Café da Manhã', time: moment("09/04/2018 8:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Jantar', time: moment("08/04/2018 20:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma'], user: 'Breno'});
    this.refeicoes.push({type: 'Almoço', time: moment("08/04/2018 12:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Café da Manhã', time: moment("08/04/2018 8:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Jantar', time: moment("07/04/2018 20:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma'], user: 'Breno'});
    this.refeicoes.push({type: 'Almoço', time: moment("07/04/2018 12:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Café da Manhã', time: moment("07/04/2018 8:00", "DD/MM/YYYY HH:mm"), animals: ['Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Jantar', time: moment("06/04/2018 20:00", "DD/MM/YYYY HH:mm"), animals: ['Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Almoço', time: moment("06/04/2018 12:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Café da Manhã', time: moment("06/04/2018 8:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
    this.refeicoes.push({type: 'Jantar', time: moment("02/04/2018 20:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma'], user: 'Breno'});
    this.refeicoes.push({type: 'Almoço', time: moment("01/04/2018 12:00", "DD/MM/YYYY HH:mm"), animals: ['Brahma', 'Gaia'], user: 'Breno'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RefeicoesPage');
  }

}
