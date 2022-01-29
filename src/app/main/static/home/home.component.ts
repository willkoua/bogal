import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MailService} from '../../../core/services-firebase/mail.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitted = false;
  cuForm: FormGroup;

  constructor(
    private mailService: MailService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.cuForm.controls; }

  private initForm(): void {
    this.cuForm = new FormGroup({
      name: new FormControl(''),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.cuForm.invalid) {
      return;
    }

    const cuValues = this.cuForm.value;

    this.mailService.sendMail(cuValues).subscribe(
      response => {
        if (response === 'sended') {
          this.toastService.success('Email envoyé');
        } else {
          this.toastService.error('Une erreur est survenue lor de l\'envoie de l\'email');
        }
        this.submitted = false;
      },
      error => {
        console.log(error.message);
        this.toastService.error('Une erreur est survenue lor de l\'envoie de l\'email');
        this.submitted = false;
      }
    );
  }

}
