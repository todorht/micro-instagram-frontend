import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from 'my-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Micro Instagram';

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private loggerService: LoggerService){
    loggerService.log('micro-instagram ready');
  }

}
