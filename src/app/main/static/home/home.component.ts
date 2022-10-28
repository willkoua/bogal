import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {MailService} from '../../../core/services-firebase/mail.service';
import {ToastrService} from 'ngx-toastr';
import {Const} from '../../../../environments/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitted = false;
  cuForm: UntypedFormGroup;
  currentLang: string;
  fr = Const.app.lang.fr;
  en = Const.app.lang.en;

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
    this.cuForm = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      subject: new UntypedFormControl('', [Validators.required]),
      message: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
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
        this.toastService.error('Une erreur est survenue lor de l\'envoie de l\'email');
        this.submitted = false;
      }
    );
  }

}
