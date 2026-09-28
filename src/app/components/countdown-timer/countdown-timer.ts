import { Component, OnDestroy, OnInit, signal } from '@angular/core';

const WEDDING_DATE = new Date('2026-08-29T16:00:00');

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-countdown-timer',
  imports: [],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.scss'
})
export class CountdownTimer implements OnInit, OnDestroy {
  protected readonly countdown = signal<Countdown>(this.computeCountdown());
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.countdown.set(this.computeCountdown()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private computeCountdown(): Countdown {
    const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };
  }
}
