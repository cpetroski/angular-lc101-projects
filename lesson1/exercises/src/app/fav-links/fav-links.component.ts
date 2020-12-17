import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title: 'Favorite Links'
  favLinks = ["https://www.youtube.com/channel/UCdNY35R25jDh_hoCPB2hQvg","https://www.woznwa.com/","https://www.ironman.com/"]
  constructor() { }

  ngOnInit() {
  }

}
