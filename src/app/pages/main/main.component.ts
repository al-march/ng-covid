import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getAllCases().subscribe(data => {
      console.log(data);
    })
  }

}
