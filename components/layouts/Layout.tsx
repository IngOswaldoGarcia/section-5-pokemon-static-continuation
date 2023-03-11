import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';
import { useRouter } from 'next/router';

type ComponentNameProps = {
    children: React.ReactNode;
    title: string
  }

const origin = ( typeof window === 'undefined' ? '' : window.location.origin );

export const Layout: FC<ComponentNameProps> = ( {children, title} ) => {

  console.log({origin});

  return (
    <>
        <Head>
            <title> { title || 'PokemonApp' } </title>
            <meta name="author" content="Oswaldo García Salas" />
            <meta name="description" content={`Infromación sobre el pokemon ${ title }`}  />
            <meta name="keywords" content={`${ title }, pokemon, pokedex `} />
            <meta property="og:title" content={`Information about ${ title }`} />
            <meta property="og:description" content={`This is a page about ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
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
