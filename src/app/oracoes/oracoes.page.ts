import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oracoes',
  templateUrl: './oracoes.page.html',
  styleUrls: ['./oracoes.page.scss'],
})
export class OracoesPage implements OnInit {

  // constructor(private router: Router) { }
  constructor() {}


    ngOnInit() {
      // this.router.navigate(['/app', 'oracoes' , 'orar']);
    }
  
}
