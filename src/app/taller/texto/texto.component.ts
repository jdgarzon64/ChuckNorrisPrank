import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {
  @Input() ImageURL;
  @Input() chiste;
  constructor() { }

  ngOnInit() {
  }

}
