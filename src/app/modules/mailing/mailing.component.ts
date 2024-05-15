import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SourceTypesEnum, TargetEnum } from './constants';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrl: './mailing.component.scss',
})
export class MailingComponent implements OnInit {
  form: FormGroup;

  sourceTypesValues = Object.values(SourceTypesEnum);
  targetValues = Object.values(TargetEnum);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      content: '',
      sourceType: SourceTypesEnum.PHOTO,
      sourceUrl: '',
      target: TargetEnum.TEST,
      buttons: this.fb.array([]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
