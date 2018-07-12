import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { PropagateChange, PropagateTouch } from '../form.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent),
      multi: true,
    },
  ],
  selector: 'co-text',
  templateUrl: 'text.component.html',
})
export class TextComponent implements ControlValueAccessor {

  @Input() isRequired = false;
  @Input() label: string;

  disabled = false;
  value: string;

  private propagateChange: PropagateChange<string> = () => {};
  private propagateTouch: PropagateTouch = () => {};

  constructor(
    private cdRef: ChangeDetectorRef,
  ) {}

  writeValue(value: string): void {
    this.value = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: PropagateChange<string>): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: PropagateTouch): void {
    this.propagateTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this.cdRef.markForCheck();
  }

  onChange(value: string): void {
    this.value = value;
    this.propagateChange(value);
    this.cdRef.markForCheck();
  }

  onFocusOut(): void {
    this.propagateTouch();
  }
}
