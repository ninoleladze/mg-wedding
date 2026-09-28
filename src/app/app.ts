import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { InviteSection } from './components/invite-section/invite-section';
import { CivilCeremonySection } from './components/civil-ceremony-section/civil-ceremony-section';
import { DinnerSection } from './components/dinner-section/dinner-section';
import { WithLoveSection } from './components/with-love-section/with-love-section';
import { FooterSection } from './components/footer-section/footer-section';

/* Elements that fade and rise into place as they scroll in. The church and
   invite blocks are laid out with absolute vw coordinates, so only their
   inner content is animated — never the positioned wrapper itself, whose
   own transform would be overwritten. */
const REVEAL_TARGETS = [
  '.invite__heading',
  '.invite__photo',
  '.invite__date',
  '.invite app-countdown-timer',
  '.ceremony__old-photo',
  '.ceremony__title',
  '.ceremony__venue',
  '.ceremony__time',
  '.ceremony__map-link',
  '.ceremony__address',
  '.ceremony-full__info',
  '.ceremony-full__map-wrapper',
  '.ceremony-full__time-wrapper',
  '.dinner__photo',
  '.footer__message',
  '.footer__phones',
  '.footer__back'
].join(',');

@Component({
  selector: 'app-root',
  imports: [
    HeroSection,
    InviteSection,
    CivilCeremonySection,
    DinnerSection,
    WithLoveSection,
    FooterSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>(REVEAL_TARGETS)
    );

    if (reducedMotion || !('IntersectionObserver' in window)) {
      // show everything immediately rather than leaving it stuck at opacity 0
      elements.forEach(el => el.classList.add('reveal', 'is-visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      // No negative bottom margin: the last element on the page sits at the
      // viewport bottom with nowhere left to scroll, so trimming the root
      // there would leave it permanently hidden.
      { threshold: 0.12 }
    );

    elements.forEach((el, i) => {
      el.classList.add('reveal');
      // small stagger so items in the same block arrive in sequence
      el.style.transitionDelay = `${(i % 4) * 90}ms`;
      this.observer!.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
