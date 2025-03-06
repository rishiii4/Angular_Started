import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'from BridgeLabz!';
  imgUrl = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM";

  url = "http://localhost:4200/";

  ngOnInit(): void{
    this.title = " from BridgeLabz";
  }

  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
