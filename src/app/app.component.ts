import { Component } from '@angular/core';

import assets from '../assets/utils.json'
import {SocialNetwork} from "./common/components/header/models/social-network";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = assets.title
  socialNetworks: Array<SocialNetwork> = assets.social_networks
}
