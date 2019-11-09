import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:any = 'HomePage';

  public appPages = [
    {
      title: 'A Paróquia',
      url: '/paroquia',
      icon: 'church',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Notícias',
      url: '/noticias',
      icon: 'newspaper',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Orações',
      url: '/oracoes',
      icon: 'praying-hands',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Missas',
      url: '/missas',
      icon: 'users',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Comunidades',
      url: '/comunidades',
      icon: 'place-of-worship',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Agenda',
      url: '/agenda',
      icon: 'calendar-alt',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'phone-alt',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Dizimista',
      url: '/dizimista',
      icon: 'hand-holding-heart',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Lojinha',
      url: '/lojinha',
      icon: 'cart-plus',
      tipo: 'fas',
      color: 'azul'
    },
    {
      title: 'Tabs',
      url: '/tabs',
      icon: 'newspaper',
      tipo: 'fas',
      color: 'azul'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
