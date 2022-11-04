import { ImSpinner } from 'react-icons/im';
import PokemonDataView from "./PokemonDataView";
import pendingImage from './pending.png';

export default function PokemonPendingView({ pokemonName }) {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    };

    return (
        <div role="alert">
            <div>
                <ImSpinner size="32" className="icon-spin"/>
                Загружаем...
            </div>
            <PokemonDataView pokemon={pokemon} />
        </div>
    )
}