import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { AnimalPage } from './animal/animal';

/**
 * Generated class for the AnimaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {
  animais: Array<{
    name: string,
    images: Array<string>,
    description: string,
    info: {
      race: string,
      weight: number,
      color: string,
      birth: moment.Moment
    },
    history: Array<{
      icon: string,
      name: string,
      date: moment.Moment,      
      description: string
    }>
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animais = [
      {
        name: 'Brahma',
        images: ['../../assets/imgs/brahma.png', '../../assets/imgs/brahma1.png'],
        description: 'Grande apreciadora da culinária, sempre que tem chance, rouba um pouco de comida para estocar em seu barrigão e ficar jiboiando o dia todo. Se a Brahma fosse o Mutley ela diria: "Comida! Comida! Comida!"',
        info: {
          race: 'Fila com Labrador',
          weight: 45,
          color: 'Tigrada',
          birth: moment('13/09/2010', 'DD/MM/YYYY')
        },
        history: [
          {icon: 'medkit', name: 'Cirurgia', date: moment(), description: 'Cirurgia no hospital veterinário da UFMG para remoção de quatro tumores'},
          {icon: 'clipboard', name: 'Histologia', date: moment(), description: 'Exame para identificar os tumores removidos'}
        ]
      },
      {
        name: 'Gaia',
        images: ['../../assets/imgs/gaia.png'],
        description: 'Amiga dos animais, ama galinhas e insetos, mas seu grande amor mesmo é pelas esferas coloridas que os humanos chamam de "bolinha". Há quem a chame de Demoninha por causa de suas habilidades destrutivas e ascendência infernal',
        info: {
          race: 'Pastor Alemão com Border Collie',
          weight: 19.9,
          color: 'Preta',
          birth: moment('19/02/2017', 'DD/MM/YYYY')
        },
        history: [
          {icon: 'medical', name: 'Crise alérgica', date: moment(), description: 'Atendida na Quatro Patas onde tomou uma injeção de anti-histamínico e uma de corticóide'}
        ]
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimaisPage');
  }

  itemTapped(event, animal) {
    this.navCtrl.push(AnimalPage, {
      animal: animal
    });
  }
}
