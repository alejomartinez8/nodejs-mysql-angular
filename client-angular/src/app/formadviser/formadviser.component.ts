import { Component, OnInit, Input } from '@angular/core';
import { AdviserService } from '../_services/adviser.service';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-adviser',
  templateUrl: './formadviser.component.html',
  styleUrls: ['./formadviser.component.css']
})
export class FormAdviserComponent implements OnInit {

  @Input() form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private adviserService: AdviserService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.form);
    this.adviserService.create(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/advisers']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
