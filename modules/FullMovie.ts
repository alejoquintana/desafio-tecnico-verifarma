import Movie from "@/modules/Movie";

export default interface rating{
	Source: string
	Value: string
}

export default interface FullMovie extends Movie {
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Ratings?: Array<rating>
	Metascore: string
	imdbRating: string
	imdbVotes: string
	DVD: string
	BoxOffice: string
	Production: string
	Website: string
	Response?: boolean
}
