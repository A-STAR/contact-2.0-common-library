import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html',
})
export class AppComponent {

  readonly menu = [
    {
      title: 'Form',
      children: [
        {
          link: '/form/text',
          text: 'Text',
        },
      ],
    },
  ];
}
