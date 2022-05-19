import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../shared/models/film.model";
import {TruncatePipe} from "../../pipes/truncate/truncate.pipe";

@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.page.html',
  styleUrls: ['./films-item.page.scss'],
  providers: [TruncatePipe]
})
export class FilmsItemPage implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

  public redirect(id: number): void {
    console.log(id)
  }

}
