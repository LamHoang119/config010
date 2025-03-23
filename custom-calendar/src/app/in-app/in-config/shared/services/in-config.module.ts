import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InConfigComponent } from './in-config.component';
import { PConfigRoutingModule } from './in-config-routing.module';
import { FormsModule } from '@angular/forms';
import { Config009Component } from '../../pages/config009/config009.component';
import { Config010Component } from '../../pages/config010/config010.component';
import { DatepickerComponent } from '../../pages/shared/components/datepicker/datepicker.component';
import { DatetimepickerComponent } from '../../pages/shared/components/datetimepicker/datetimepicker.component';
import { TextareaComponent } from '../../pages/shared/components/textarea/textarea.component';
import { TextboxComponent } from '../../pages/shared/components/textbox/textbox.component';
import { NumericTextBoxComponent } from '../../pages/shared/components/numeric-text-box/numeric-text-box.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MonthFormatPipe } from '../../pages/shared/components/pipes/month-format.pipe';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [
    InConfigComponent,
    Config009Component,
    Config010Component,
    DatepickerComponent,
    DatetimepickerComponent,
    MonthFormatPipe,
    TextareaComponent,
    TextboxComponent,
    NumericTextBoxComponent,
  ],
  imports: [
    CommonModule,
    PConfigRoutingModule,
    DateInputsModule,
    DropDownsModule,
    FormsModule,
    InputsModule,
  ],
})
export class InConfigModule {}
