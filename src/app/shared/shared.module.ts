import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimeFormatPipe } from './pipes/date-time-format.pipe';

@NgModule({
  imports: [
    ...MATERIAL_MODULES,
    BrowserAnimationsModule,
  ],
  exports: [
    ...MATERIAL_MODULES,
    DateTimeFormatPipe,
  ],
  declarations: [
    DateTimeFormatPipe,
  ],
  providers: [
  ]
})
export class SharedModule { }
