import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'co-label',
  templateUrl: 'label.component.html',
})
export class LabelComponent {

  @Input() isRequired: boolean;
  @Input() text: string;
}
