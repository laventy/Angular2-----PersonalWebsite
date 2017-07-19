import { Component, 
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes,
         OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax-page',
  templateUrl: './parallax-page.component.html',
  styleUrls: ['./parallax-page.component.css'],
  animations: [
    trigger('movePanel', [
            transition('void => *', [
                animate(1000, keyframes([
                    style({opacity: 0, transform: 'translateY(-40px)', offset: 0}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                ]))
            ])

        ])
  ]
})
export class ParallaxPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
