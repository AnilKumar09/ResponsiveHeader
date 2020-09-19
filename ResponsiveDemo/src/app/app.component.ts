import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  isVisible        = false;
  isVisibleSideBar = false;
  title = 'ResponsiveDemo';


  OpenModel()
  {
    this.isVisible  = true;
  }

  closeModal()
  {
     this.isVisible = false;
  }
}
