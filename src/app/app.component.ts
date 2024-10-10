import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TitleComponentComponent } from './core/components/title-component/title-component.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  ngOnInit(): void {
    this.setLanguage();
  }

  setLanguage() {
    if (window.location.pathname === '/vi') {
      this.translate.setDefaultLang('vi');
    } else {
      this.translate.setDefaultLang('en');
    }
  }
}
