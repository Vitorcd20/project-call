import { Heading, Text } from "@ignite-ui/react";
import Image from "next/image"
import { Container, Hero, Preview } from "./styles";

import previewImage from '../../assets/app-image.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento Desconplicado</Heading>
        <Text size="lg">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>
      </Hero>

      <Preview>
        
      </Preview>
    </Container>
  )
}