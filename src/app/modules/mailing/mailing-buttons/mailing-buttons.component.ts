import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mailing-buttons',
  templateUrl: './mailing-buttons.component.html',
  styleUrl: './mailing-buttons.component.scss',
})
export class MailingButtonsComponent {
  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  get buttons() {
    return this.parentForm.get('buttons') as FormArray;
  }

  addButton() {
    this.buttons.push(this.createButton());
  }

  removeButton(index: number) {
    this.buttons.removeAt(index);
  }

  createButton() {
    return this.fb.group({
      text: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }
}
