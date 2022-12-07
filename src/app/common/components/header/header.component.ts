import { Component, Input } from '@angular/core';
import {SocialNetwork} from "./models/social-network";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() headerTitle!: string;
  @Input() socialNetworks!: Array<SocialNetwork>;
}
