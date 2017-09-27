import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";

// Declare jquery
declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Check whether the device is touch-enabled
    // Then add touch-device class to the html tag
    $(document).on('touchstart', function() {
        $('section, nav').addClass('touch-device');
    });
  }

  // Detect scroll event to change the style of nav bar
  @HostListener("window:scroll", [])
  onWindowScroll() {
    var threshhold = 20;
    if(window.pageYOffset >= threshhold){
      $("nav").addClass("nav-change");
    } else{
      $("nav").removeClass("nav-change");
    }
  }
}
