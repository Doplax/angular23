import { Component, type OnInit } from '@angular/core';
import { AppRoutingModule } from "../../../app-routing.module";

@Component({
  selector: 'app-maps-layout',
  standalone: true,
  imports: [AppRoutingModule],
  templateUrl: './maps-layout.component.html',
  styleUrls: ['./maps-layout.component.css'],
})
export class MapsLayoutComponent implements OnInit {

  ngOnInit(): void { }

}
