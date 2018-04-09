import { NgModule } from '@angular/core';

import { PropertiesPipe } from './properties/properties';

@NgModule({
	declarations: [PropertiesPipe],
	imports: [],
	exports: [PropertiesPipe]
})
export class PipesModule {}
