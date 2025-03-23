import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelModule } from '@progress/kendo-angular-label';
import { IntlModule } from '@progress/kendo-angular-intl';
import { AppRoutingModule } from './app-routing.module';
import {
  KENDO_DROPDOWNS,
  DropDownsModule,
} from '@progress/kendo-angular-dropdowns';
import '@progress/kendo-angular-intl/locales/vi/calendar';
import '@progress/kendo-angular-intl/locales/vi/numbers';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule,
    LabelModule,
    IntlModule,
    DropDownsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'vi-VN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
