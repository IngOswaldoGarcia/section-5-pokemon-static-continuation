import { useTheme, Text, Spacer, Image } from "@nextui-org/react";
import Link from 'next/link';

export const Navbar = () => {

    const {theme} = useTheme();

  return (
    <div style={{ 
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>

        <Image 
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
            alt="icono de la app"
            width={70}
            height={70}
        />

        <Link href="/" passHref style={{ display: "flex", flexDirection: "row" }}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>ókemon</Text>
        </Link>

        <Spacer css={{ flex: 1 }}/>

        <Link href="/favorites" passHref style={{ marginRight: '10px' }}>
            <Text color='white' h3>Favoritos</Text>
        </Link>
    </div>
  )
}
