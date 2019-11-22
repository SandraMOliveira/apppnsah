import { OnInit, Input, Component } from '@angular/core';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.scss'],
})
export class ValorComponent implements OnInit {
  @Input()
  valor:number;

  constructor() { }

  ngOnInit() {}

}
