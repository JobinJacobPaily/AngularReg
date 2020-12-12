import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RegAndLog';
  reg = true;

  toogle()
    {
       this.reg =  !this.reg;
    }
}
