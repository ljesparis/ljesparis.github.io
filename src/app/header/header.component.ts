import { Component, Input } from '@angular/core';

class SocialNetwork {
  name!: string;
  url!: string;
  svg!: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() headerTitle!: string
  @Input() socialNetworks!: Array<SocialNetwork>
}
