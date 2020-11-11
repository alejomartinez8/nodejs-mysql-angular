import { Component, OnInit, Input } from '@angular/core';
import { AdviserService } from '../_services/adviser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Adviser } from '../_model/adviser';
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
  isUpdate = false;
  adviser: Adviser = {
    id: null,
    full_name: '',
    legal_id: null,
    phone: null,
    date_of_birth: null,
    gender: '',
    client: '',
    headquarters: '',
    user: null,
    age: null
  };

  constructor(
    private adviserService: AdviserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
      this.getAdviser(id);
    }

  }

  getAdviser(id): void {
    this.adviserService.getById(id).subscribe(
      data => {
        this.adviser = data[0];
      },
      err => {
        console.log(err);
      }
    );

  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateAdviser();
    } else {
      this.addAdviser();
    }
  }

  updateAdviser(): void {
    this.adviserService.update(this.adviser.id, { ...this.adviser, ...this.form }).subscribe(
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

  addAdviser(): void {
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

  goBack(): void {
    this.location.back();
  }

}
