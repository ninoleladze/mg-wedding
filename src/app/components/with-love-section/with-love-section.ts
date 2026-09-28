import { Component } from '@angular/core';

@Component({
  selector: 'app-with-love-section',
  imports: [],
  templateUrl: './with-love-section.html',
  styleUrl: './with-love-section.scss'
})
export class WithLoveSection {
  protected readonly repeats = Array.from({ length: 8 }, (_, i) => i + 1);
}
