import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';

/** seconds each photo takes to glide across the screen */
const SECONDS_PER_SLIDE = 7;

@Component({
  selector: 'app-hero-section',
  imports: [NavBar],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  private readonly isPhone =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

  protected readonly folder = this.isPhone ? 'phone' : 'web';
  protected readonly slides = this.isPhone
    ? ['page-1.0.png', 'page-1.1.png', 'page-1.2.png', 'page-1.3.png', 'page-1.4.png']
    : ['page-1.0.png', 'page-1.1.png', 'page-1.2.png', 'page-1.3.png'];

  /** the set is rendered twice so the loop repeats without a visible jump */
  protected readonly duration = this.slides.length * SECONDS_PER_SLIDE;

  protected slideUrl(name: string): string {
    return `url('/assets/images/${this.folder}/${name}')`;
  }
}
