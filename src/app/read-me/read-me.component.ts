import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.scss']
})
export class ReadMeComponent implements OnInit {
  generateCommand = 'ng generate component #your-component-name-here# -m home.module';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const breakpointMessage = 'test';
  }

  onClick(): void{
    this.authService.test();
  }

}
