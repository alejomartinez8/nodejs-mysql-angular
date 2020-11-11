import { Component, OnInit, Input } from '@angular/core';
import { Adviser } from '../_model/adviser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-adviser',
  templateUrl: './update-adviser.component.html',
  styleUrls: ['./update-adviser.component.css']
})
export class UpdateAdviserComponent implements OnInit {

  @Input() adviser: Adviser;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}
