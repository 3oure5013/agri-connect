import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  images: string[] = [
    "../../assets/logo.jpg",
    "../../assets/logo.jpg",
    "../../assets/logo.jpg",
  ];

  permiss = [
    {
    title : "Vente",
    description : "ceci est un permis en vente",
    location : "Gagnoa",
    imageUrl : "../../assets/logo.jpg",
    price : 1230000
  },
  {
    title : "Vente",
    description : "ceci est un permis en vente",
    location : "Gagnoa",
    imageUrl : "../../assets/logo.jpg",
    price : 1230000
  },
  {
    title : "Vente",
    description : "ceci est un permis en vente",
    location : "Gagnoa",
    imageUrl : "../../assets/logo.jpg",
    price : 1230000
  },
  {
    title : "Vente",
    description : "ceci est un permis en vente",
    location : "Gagnoa",
    imageUrl : "../../assets/logo.jpg",
    price : 1230000
  },
]
  constructor() { }

  ngOnInit() {
  }

}
