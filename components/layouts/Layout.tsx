import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';

type ComponentNameProps = {
    children: React.ReactNode;
    title: string
  }

export const Layout: FC<ComponentNameProps> = ( {children, title} ) => {
  return (
    <>
        <Head>
            <title> { title || 'PokemonApp' } </title>
            <meta name="author" content="Oswaldo García Salas" />
            <meta name="description" content={`Infromación sobre el pokemon ${ title }`}  />
            <meta name="keywords" content={`${ title }, pokemon, pokedex `} />
        </Head>
        <Navbar />
        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
