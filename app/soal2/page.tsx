"use client";
import { useEffect, useState } from "react";

interface Anime {
    mal_id: number;
    title: string;
    episodes: number;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

export default function Soal2() {
    const [animeList, setAnimeList] = useState<Anime[]>([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime")
            .then((res) => res.json())
            .then((data) => setAnimeList(data.data))
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#1E1E2E] justify-start overflow-y-auto">
            <h1 className="text-center font-bold mt-10 text-white text-2xl">
                TOP ANIME TODAY
            </h1>

            <div className="grid md:grid-cols-4 sm:grid-cols-1">
                {animeList.length > 0 ? (
                    animeList.slice(0, 8).map((anime) => (
                        <div
                            key={anime.mal_id}
                            className="relative bg-white w-40 h-60 mt-10 mx-5 rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={anime.images.jpg.image_url}
                                alt={anime.title}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black to-transparent"></div>

                            <p className="absolute bottom-6 left-2 right-2 text-white text-xs font-semibold">
                                {anime.title}
                            </p>
                            <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold">
                                Eps: {anime.episodes}
                            </p>

                        </div>
                    ))
                ) : (
                    <p className="text-white text-center font-bold mt-10">Loading animes...</p>
                )}
            </div>
        </div>
    );
}
