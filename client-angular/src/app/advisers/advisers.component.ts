import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Adviser } from '../_model/adviser';
import { AdviserService } from '../_services/adviser.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-advisers',
  templateUrl: './advisers.component.html',
  styleUrls: ['./advisers.component.css']
})
export class AdvisersComponent implements OnInit {
  isLoggedIn = false;
  advisers: Adviser[];

  constructor(
    private adviserService: AdviserService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.adviserService.getAllAdvisers().subscribe(
        data => {
          console.log(data);
          this.advisers = data;
        },
        err => {
          this.advisers = JSON.parse(err.error).message;
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  delete(id: number): void {
    this.adviserService.delete(id).subscribe(
      data => {
        console.log(data);
        this.reloadPage();
      },
      err => {
        console.log(err);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
