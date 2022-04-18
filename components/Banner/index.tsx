import Image from "next/image"
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/movie";
import { Movie } from "../../typings";

interface Props {
    netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }, [netflixOriginals])

    console.log("movie", movie)
    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image
                    layout="fill" src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Banner;