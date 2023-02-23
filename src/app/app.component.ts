import { Component, OnInit } from '@angular/core';
import { NasaService } from './service/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '12-API-NASA';
  public imgOfTheDay: any = "";

  constructor(public nasaService:NasaService){}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(url => {
      this.imgOfTheDay = url});
  }
}
