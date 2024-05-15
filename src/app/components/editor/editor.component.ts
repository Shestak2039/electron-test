import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule, NgStyle, NgxEditorModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true,
    },
  ],
})
export class EditorComponent implements OnInit, OnDestroy, ControlValueAccessor {
  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  html = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.editor = new Editor({
      history: true,
      keyboardShortcuts: true,
      inputRules: true,
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  // Реализация методов ControlValueAccessor
  writeValue(value: any): void {
    if (value !== undefined) {
      this.html = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Обработчик изменений HTML редактора
  handleEditorChange(html: string): void {
    this.html = html;
    this.onChange(html); // Уведомляем Angular о изменениях значения
  }
}
