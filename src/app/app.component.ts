import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
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
  private route_active = inject(ActivatedRoute);

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
    this.route_active.url.subscribe((url) => {
      const lang = url[0]?.path;
      this.setLanguage(lang);
    });
  }

  setLanguage(lang: string) {
    if (lang && lang === 'vi') {
      this.translate.setDefaultLang('vi');
    } else {
      this.translate.setDefaultLang('en');
    }
  }
}
