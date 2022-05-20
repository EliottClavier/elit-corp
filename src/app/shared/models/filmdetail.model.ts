import {Genre} from "./genre.model";
import {Collection} from "./collection.model";
import {Company} from "./company.model";
import {Country} from "./country.model";
import {Language} from "./language.model";

export class FilmDetail {
  id: number;
  imdb_id: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection[];
  genres: Genre[]
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[]
  production_countries: Country[]
  release_date: string
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: false
  vote_average: number;
  vote_count: number;
}
