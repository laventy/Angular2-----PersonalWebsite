import { Component, 
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes,
         OnInit } from '@angular/core';

// Declare jquery
declare var $:any;

// Declare PhotoSwipe for Moment section
declare var initPhotoSwipeFromDOM: any;

// Declare masonry-related
declare var imagesLoaded: any;
declare var masonry: any;

@Component({
  selector: 'app-parallax-page',
  templateUrl: './parallax-page.component.html',
  styleUrls: ['./parallax-page.component.css'],
  // animations: [
  //   trigger('moveDown', [
  //           transition('void => *', [
  //               animate(1000, keyframes([
  //                   style({opacity: 0, transform: 'translateY(-40px)', offset: 0}),
  //                   style({opacity: 1, transform: 'translateY(0)', offset: 1}),
  //               ]))
  //           ])

  //   ]),

  //   trigger('moveRight', [
  //     transition('void => *', [
  //         animate(1500, keyframes([
  //             style({opacity: 0, transform: 'translateX(-40px)', offset: 0}),
  //             style({opacity: 1, transform: 'translateX(0)', offset: 1}),
  //         ]))
  //     ])

  //   ]),
  // ]
})
export class ParallaxPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initial PhotoSwipe library
    initPhotoSwipeFromDOM('.my-gallery');

    // init Masonry after all images have loaded
    var $grid = $('.grid').imagesLoaded( function() {
      $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
      }); 
    });
  }
}
