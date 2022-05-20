import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmsService} from "../../services/films/films.service";
import {FilmDetail} from "../../shared/models/filmdetail.model";

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.page.html',
  styleUrls: ['./films-detail.page.scss'],
})
export class FilmsDetailPage implements OnInit {

  public id: number;
  public film: FilmDetail = new FilmDetail();

  constructor(public route: ActivatedRoute, public filmService: FilmsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params.id;
        this.getFilmDetail();
      }
    );
  }

  public getFilmDetail(): void {
    this.filmService.getFilmDetail(this.id).subscribe(
      res => {
        console.log(res)
        this.film = res
      }
    );
  }

  public getFormattedRuntime(runtime: number): string {
    return ~~(runtime/60) + "h" + String(runtime % 60).padStart(2, '0')
  }

}
