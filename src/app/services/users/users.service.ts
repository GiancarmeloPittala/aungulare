import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [{
    nome: "pippo", cognome: "pluto"
  }, {
    nome: "pippo1", cognome: "pluto"
  }, {
    nome: "pippo2", cognome: "pluto"
  }, {
    nome: "pippo3", cognome: "pluto"
  }, {
    nome: "pippo4", cognome: "pluto"
  }]
  constructor() { }
}
