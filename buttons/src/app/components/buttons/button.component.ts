import {Component} from "@angular/core";

@Component({
  selector: 'button-app',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public instruction = 'Hello there... Click down below';

  constructor() {}

}
