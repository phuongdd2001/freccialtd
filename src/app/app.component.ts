import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TitleComponentComponent } from './core/components/title-component/title-component.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IMisson, MissionEn, MissionVi } from './core/data/common.data';
import AOS from 'aos';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    TranslateModule,
    TitleComponentComponent,
  ],
  animations: [
    trigger('logoEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate(
          '700ms 100ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0px)' })
        ),
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private translate = inject(TranslateService);

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

  widthWindow: number = 0;

  missions: IMisson[] = [];

  ngOnInit(): void {
    this.widthWindow = window.innerWidth;
    this.setLanguage();
    AOS.init({ easing: 'linear', once: true });
  }

  setLanguage() {
    if (window.location.pathname === '/vi') {
      this.translate.setDefaultLang('vi');
      this.missions = MissionVi;
    } else {
      this.translate.setDefaultLang('en');
      this.missions = MissionEn;
    }
  }

  addTagBr(value: string): string {
    return value?.replace(/\./g, '.<br>');
  }
}
