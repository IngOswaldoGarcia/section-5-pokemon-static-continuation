import { Grid, Card } from '@nextui-org/react';
import React from 'react'
import { FC } from 'react';
import { NextPage } from 'next';
import { FavoriteCardPokemons } from './FavoriteCardPokemons';

type Props = {
    pokemons: number[]
  }
 
export const FavoritePokemons: NextPage<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify="flex-start">
        {
            pokemons.map(
                pokemon => ( <FavoriteCardPokemons key={pokemon} pokemonId={pokemon} /> )
            )
        }
    </Grid.Container> 
  )
}
