import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'full-height' },
  selector: 'app-form-text',
  templateUrl: 'text.component.html',
})
export class TextComponent {

  readonly form = this.formBuilder.group({
    text1: this.formBuilder.control(''),
    text2: this.formBuilder.control('Foo'),
    text3: this.formBuilder.control('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}
}
