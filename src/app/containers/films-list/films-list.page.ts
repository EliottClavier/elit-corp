import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services/films/films.service";
import {Film} from "../../shared/models/film.model";
import {TruncatePipe} from "../../pipes/truncate/truncate.pipe";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.page.html',
  styleUrls: ['./films-list.page.scss'],
  providers: [TruncatePipe]
})
export class FilmsListPage implements OnInit {

  public filmsList: Film[] = [];
  public spinnerShown: boolean = true;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
     this.getPopularFilms();
  }

  public getPopularFilms(): void {
    this.spinnerShown = true;
    this.filmsService.getPopularFilms().subscribe(
      res => {
        this.spinnerShown = false;
        this.filmsList = res["results"];
      },
      error => console.log(error)
    );
  }

}
