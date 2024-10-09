import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TitleComponentComponent } from './components/title-component/title-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, TitleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  socials: { icon: string; link: string }[] = [
    { icon: 'assets/images/ic_facebbook.svg', link: '' },
    { icon: 'assets/images/ic_instagram.svg', link: '' },
    { icon: 'assets/images/ic_linkedin.svg', link: '' },
    { icon: 'assets/images/ic_twitter.svg', link: '' },
  ];
  partners: string[] = [
    'assets/images/ic_partner_1.png',
    'assets/images/ic_partner_2.png',
    'assets/images/ic_partner_3.png',
    'assets/images/ic_partner_4.png',
  ];
}
