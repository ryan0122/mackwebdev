import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../shared/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  sendEmail(data) {
    console.log(data);
    // Send the email then present a message saying it was successfully send
    this.emailService.send(data).subscribe(res => {
      this.showSuccess(res);
    });
  }

  showSuccess(res){
    // Show some sort of message on the page
  }

}
