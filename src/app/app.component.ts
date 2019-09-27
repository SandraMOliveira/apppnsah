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
  public appPages = [
    {
      title: ' A Paróquia',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Comunidades',
      url: '/comunidades',
      icon: 'list'
    },
    {
      title: 'Agenda',
      url: '/agenda',
      icon: 'calendar'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'call'
    },
    {
      title: 'Dizimista',
      url: '/dizimista',
      icon: 'list'
    },
    {
      title: 'Lojinha',
      url: '/lojinha',
      icon: 'list'
    },{
      title: 'Missas',
      url: '/missas',
      icon: 'list'
    },
    {
      title: 'Notícias',
      url: '/noticias',
      icon: 'list'
    },
    {
      title: 'Orações',
      url: '/oracoes',
      icon: 'body'
    }
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
