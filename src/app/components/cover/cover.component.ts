import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  test = "questa è una stringa di test"
  disabled = false

  constructor(){
    console.log( "costruttore")
  }

  ngOnInit(): void {
    console.log( "init")
  }

  onInput(event: Event){
    console.log( (<HTMLInputElement>event.target).value )
  }
}
