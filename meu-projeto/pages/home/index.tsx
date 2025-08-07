import { Heading, Text } from "@ignite-ui/react";
import Image from "next/image"
import { Container, Hero, Preview } from "./styles";

import previewImage from '../../assets/app-image.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">Agendamento Desconplicado</Heading>
        <Text size="xl">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>
      </Hero>

      <Preview>
        <Image 
        src={previewImage}
        height={400}
        quality={100}
        priority
        alt="preview image"
        />
      </Preview>
    </Container>
  )
}