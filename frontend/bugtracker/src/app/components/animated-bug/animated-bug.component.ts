import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-bug',
  standalone: false,
  templateUrl: './animated-bug.component.html',
  styleUrl: './animated-bug.component.css'
})
export class AnimatedBugComponent {
  bugClicks = 0;
  isShaking = false;
  bubbleMessage = '';

  onBugClick(): void {
    this.bugClicks++;
    console.log(`Kliknięcia w robaczka: ${this.bugClicks}`);

    // RESET animacji: najpierw wyłącz, potem załącz
    this.isShaking = false;
    setTimeout(() => {
      this.isShaking = true;

      // Animacja trwa np. 3 sekundy
      setTimeout(() => {
        this.isShaking = false;
      }, 3000);

    }, 10);

    if (this.bugClicks % 5 === 0) {
      const robaczekText = this.getRobaczekText(this.bugClicks);

      const messages = [
        `Brawo! Złapałeś już ${this.bugClicks} ${robaczekText}! Robisz się mistrzem łapania!`,
        `Wow! ${this.bugClicks} ${robaczekText} w kieszeni! Świetna robota!`,
        `Masz już ${this.bugClicks} ${robaczekText}! Czyżbyś był pogromcą insektów?`,
        `${this.bugClicks} ${robaczekText}? To już cała armia!`,
        `Gratulacje! Złapałeś ${this.bugClicks} dzielnych ${robaczekText}!`
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      this.showBubbleMessage(randomMessage);
    }
  }

  getRobaczekText(count: number): string {
    if (count === 1) {
      return 'robaczka';
    }
    const lastTwoDigits = count % 100;
    const lastDigit = count % 10;

    if (lastTwoDigits >= 12 && lastTwoDigits <= 14) {
      return 'robaczków';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'robaczki';
    }

    return 'robaczków';
  }

  showBubbleMessage(message: string): void {
    this.bubbleMessage = message;
    setTimeout(() => {
      this.bubbleMessage = '';
    }, 4000);
  }
}
