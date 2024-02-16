import { Component } from '@angular/core';
import { LoaderService } from '../Loader/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public loaderService:LoaderService){}
}
