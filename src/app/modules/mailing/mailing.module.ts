import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailingComponent } from './mailing.component';
import { MailingRoutingModule } from './mailing-routing.module';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { EditorComponent } from '../../components/editor/editor.component';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MailingButtonsComponent } from './mailing-buttons/mailing-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MailingRoutingModule,
    MatTabGroup,
    MatTab,
    EditorComponent,
    MatRadioGroup,
    MatRadioButton,
    MatButton,
  ],
  declarations: [MailingComponent, MailingButtonsComponent],
})
export class MailingModule {}
