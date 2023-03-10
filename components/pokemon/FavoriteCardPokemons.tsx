import { Card, Grid } from '@nextui-org/react'
import React from 'react'
import { FC } from 'react';
import { useRouter } from 'next/router';

type Props = {
    pokemonId: number
}

export const FavoriteCardPokemons: FC<Props> = ({ pokemonId }) => {

    const router = useRouter();

    const onFavoriteClick = () => {
        router.push(`/name/${pokemonId}`);
    }
  return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={1} onClick={onFavoriteClick}>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140} 
                />
            </Card>
        </Grid>
    )
}
