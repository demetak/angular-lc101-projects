import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos and Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.pinimg.com/564x/6b/4a/73/6b4a738dd051ec314307435efa574807.jpg';
  image3 = 'https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png';

  constructor() { }

  ngOnInit() {
  }

}