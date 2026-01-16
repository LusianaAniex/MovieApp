export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  runtime?: number;
  genres?: {
    // Add genres for detail page
    id: number;
    name: string;
  }[];
  tagline?: string;
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
  tagline: string;
}
export interface ApiResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}
export interface MovieDetailData {
  movie: MovieDetails | null;
  trailerKey: string | null;
  credits: unknown;
  images: unknown;
  isLoading: boolean;
  error: string | null;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
  trailer_key?: string;
}

interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type MovieListResponse = PaginatedResponse<Movie>;
