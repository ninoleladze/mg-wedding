import { Component } from '@angular/core';
import { CountdownTimer } from '../countdown-timer/countdown-timer';

@Component({
  selector: 'app-invite-section',
  imports: [CountdownTimer],
  templateUrl: './invite-section.html',
  styleUrl: './invite-section.scss'
})
export class InviteSection {}
