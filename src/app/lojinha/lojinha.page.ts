import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lojinha',
  templateUrl: './lojinha.page.html',
  styleUrls: ['./lojinha.page.scss'],
})
export class LojinhaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['produtos']);
  }

}
