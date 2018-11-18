import { Component } from '@angular/core';

@Component({
  selector: 'foot',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.less'],
})
export class FooterComponent {

  getFullYear() {
    return (new Date()).getFullYear();
  }


}


