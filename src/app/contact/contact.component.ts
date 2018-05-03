import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../shared/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  messageSent = false;

  constructor(private emailService: EmailService,  private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl(),
      message: new FormControl('', Validators.required)
    });
  }

  sendEmail() {
    console.log(this.contactForm.value);
    // Send the email then present a message saying it was successfully send
    this.emailService.send(this.contactForm.value).subscribe(res => {
      this.showSuccess(res);
    });
  }

  showSuccess(res){
    // Show some sort of message on the page
    this.messageSent = true;
  }

}
