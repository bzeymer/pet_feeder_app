import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as moment from 'moment';

import { AppModule } from './app.module';

moment.locale("pt-br");
platformBrowserDynamic().bootstrapModule(AppModule);
