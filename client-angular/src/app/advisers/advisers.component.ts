import { Component, OnInit } from '@angular/core';
import { Adviser } from '../adviser';

const ADVISERS: Adviser[] = [
  {
    id: 1, full_name: 'Alejandro Martínez', legal_id: 12345678, phone: 888888, date_of_birth: new Date('1987-07-28'), gender: 'masculino', client: 'cliente ejemplo', headquarters: 'Ruta N', age: 33,
  },
  {
    id: 2, full_name: 'Benjamin Martínez', legal_id: 12345678, phone: 888888, date_of_birth: new Date('1987-07-28'), gender: 'masculino', client: 'cliente ejemplo', headquarters: 'Ruta N', age: 33,
  },
  {
    id: 3, full_name: 'Joaquin Martínez', legal_id: 12345678, phone: 888888, date_of_birth: new Date('1987-07-28'), gender: 'masculino', client: 'cliente ejemplo', headquarters: 'Ruta N', age: 33,
  }
];


@Component({
  selector: 'app-advisers',
  templateUrl: './advisers.component.html',
  styleUrls: ['./advisers.component.css']
})
export class AdvisersComponent implements OnInit {
  advisers = ADVISERS;

  constructor() { }

  ngOnInit(): void {

  }

}
