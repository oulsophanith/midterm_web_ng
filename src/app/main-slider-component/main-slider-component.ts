import { Component } from '@angular/core';
import slideData from '../data/slides.json';

@Component({
  selector: 'app-main-slider-component',
  templateUrl: './main-slider-component.html',
  styleUrl: './main-slider-component.css',
})
export class MainSliderComponent {
  slides = slideData;
  currentSlide = 0;

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
