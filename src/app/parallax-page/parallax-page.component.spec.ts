import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxPageComponent } from './parallax-page.component';

describe('ParallaxPageComponent', () => {
  let component: ParallaxPageComponent;
  let fixture: ComponentFixture<ParallaxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
