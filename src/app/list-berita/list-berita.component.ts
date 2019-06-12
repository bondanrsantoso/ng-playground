import { Component, OnInit } from "@angular/core";
import { generateListBerita } from "./beritaRandom";
import { Berita } from "../Classes/Berita";

@Component({
  selector: "app-list-berita",
  templateUrl: "./list-berita.component.html",
  styleUrls: ["./list-berita.component.css"]
})
export class ListBeritaComponent implements OnInit {
  daftarBerita: Array<Berita> = [];
  constructor() {}

  ngOnInit() {
    this.daftarBerita = [
      {
        judul: "Fashion",
        konten:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A neque quia iure, voluptatem consectetur blanditiis delectus facilis et nam cupiditate minus reiciendis odio officia. Ipsum eos rem repellat non suscipit.",
        kategori: ["Remaja", "manula"]
      },
      {
        judul: "Make-up",
        konten:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A neque quia iure, voluptatem consectetur blanditiis delectus facilis et nam cupiditate minus reiciendis odio officia. Ipsum eos rem repellat non suscipit.",
        kategori: ["Anak-anak", "Bapa", "Bayi"]
      },
      {
        judul: "Sport",
        konten:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A neque quia iure, voluptatem consectetur blanditiis delectus facilis et nam cupiditate minus reiciendis odio officia. Ipsum eos rem repellat non suscipit.",
        kategori: ["Manula"]
      },
    ];
  }
}
