import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../shared/models/film.model";
import {TruncatePipe} from "../../pipes/truncate/truncate.pipe";

@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.scss'],
  providers: [TruncatePipe]
})
export class FilmsItemComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
