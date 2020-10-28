import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  data = [];
  dataraw;

  constructor() {
    if (localStorage.getItem('data')){
      this.dataraw = localStorage.getItem('data');
      this.data = JSON.parse(this.dataraw);
      console.log(this.data);
    }
  }

  ngOnInit(): void {
  }

  deletedata(data): void {
    const index: number = this.data.indexOf(data);
    if (index !== -1) {
        this.data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(this.data));
    }
}

}
