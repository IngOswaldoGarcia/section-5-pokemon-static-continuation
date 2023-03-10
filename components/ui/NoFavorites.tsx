import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }}>

        <Text h1> No hay Favoritos</Text>

        <Image 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
            width={100}
            height={100}
            css={{
                opacity: 0.1
            }}
        />

    </Container>
  )
}
