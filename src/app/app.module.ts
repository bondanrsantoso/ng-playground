import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListBeritaComponent } from './list-berita/list-berita.component';
import { BeritaComponent } from './berita/berita.component';

import { RouterModule, Routes } from "@angular/router";
import { BeritaAboutComponent } from './berita-about/berita-about.component';

const appRoutes: Routes = [
  {
    path: "berita",
    component: BeritaComponent
  },
  {
    path: "berita/list",
    component: ListBeritaComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ListBeritaComponent,
    BeritaComponent,
    BeritaAboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
