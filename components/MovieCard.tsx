import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({id , poster_path , title , vote_average , release_date} : Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-[30%]">
            <Image 
                source = {{uri : poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.co/600x400/1a1a1a/ffffff.png'}}
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-white text-sm font-bold  mt-2" numberOfLines={1}>{title}</Text>
            <View className="flex-row items-center justify-start gap-x-1">
                <Image source={icons.star} className="size-4" tintColor="#FFD700" />
                <Text className="text-yellow-400 text-sm font-bold uppercase">{Math.round(vote_average * 10) / 10}</Text>
            </View>
            <View className="flex-row items-center justify-between gap-x-1">
                <Text className="text-light-300 text-xs mt-1 font-medium">{release_date}</Text>
                <Text className="text-light-300 text-xs mt-1 font-medium">HD</Text>

            </View>

        </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
