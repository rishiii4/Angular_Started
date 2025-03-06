import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, FormsModule, NgIf], 
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Hello World';
  imageUrl = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM";

  url = "http://localhost:4200/";
  userName: string = "";
  nameError: string = "";

  onClick($event: any) {
    console.log("Button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onInput($event: any) {
    console.log("Change Event Occurred!", this.userName); // Full name print karega
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
  
    if (this.userName && nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "Name is Incorrect!";
    }
  }
  
}
