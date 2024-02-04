import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";

function IndividualPokemon (){
    const {id} = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    console.log('ID:', id);

    useEffect(() => {
        let fetchIndividual = async () => {
            try{
                const {data} = await axios.get(
                    'https://pokeapi.co/api/v2/pokemon/${id}'
                );
                console.log(data);
                setPokemonDetails(data);
            } catch (err) {
                console.error("Error fetching Pokemon details", err);
            }
        };
        fetchIndividual();
    }, [id]);
    return (
        <div>
            {pokemonDetails ? (
                <div>
                    <h2> Name: {pokemonDetails.name}</h2>
                    <img src= {pokemonDetails.sprites.front_default} />
                    </div>
            ) : (
                <p>Loading Pokemon details...</p>
            )}
        </div>
    );
}

export default Individual;