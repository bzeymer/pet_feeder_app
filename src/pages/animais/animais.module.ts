import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from '../../pipes/pipes.module';
import { AnimaisPage } from './animais';
import { AnimalPage } from './animal/animal';

@NgModule({
  declarations: [
    AnimaisPage,
    AnimalPage
  ],
  imports: [
    IonicPageModule.forChild(AnimaisPage),
    PipesModule
  ],
  entryComponents: [
    AnimaisPage,
    AnimalPage
  ],
})
export class AnimaisPageModule {}
