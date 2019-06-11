import { Component, OnInit } from '@angular/core';
import { generateListBerita } from "./beritaRandom";

@Component({
  selector: 'app-list-berita',
  templateUrl: './list-berita.component.html',
  styleUrls: ['./list-berita.component.css']
})
export class ListBeritaComponent implements OnInit {

  beritaList: any;
  constructor() { }

  ngOnInit() {
    this.beritaList = generateListBerita(20);
  }

}
