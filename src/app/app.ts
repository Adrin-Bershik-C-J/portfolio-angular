import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          [style({ position: 'fixed', width: '100%', height: '100%' })],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              style({ opacity: 1, transform: 'translateY(0px)' }),
              animate(
                '250ms ease',
                style({ opacity: 0, transform: 'translateY(-10px)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(10px)' }),
              animate(
                '300ms 100ms ease',
                style({ opacity: 1, transform: 'translateY(0px)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
