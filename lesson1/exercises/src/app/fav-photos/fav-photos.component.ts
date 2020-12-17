import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Camera Work';
  image1 = './assets/DSC-8360.jpg';
  image2 = './assets/DSC-8373.jpg';
  image3 = './assets/DSC-8401.jpg';

  constructor() { }

  ngOnInit() {
  }

}