import React from 'react'
import styled from 'styled-components'
import { Name } from './Name'
import { Stats } from './Stats'
import { Personality } from './Personality'
import { Spells } from './Spells'

const CharacterSheetContainer = styled.section`
  max-width: 60rem;
  margin: 1rem auto;
  padding: 1rem;
  border 1px solid black;
  box-shadow: ${({ theme }) => theme.shadow.primary.medium};
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 1rem;
`
const Traits = styled.div`
  background-color: purple;
`
const Languages = styled.div`
  background-color: lightblue;
`
const Equipment = styled.div`
  background-color: lightgreen;
`

export const CharacterSheet = () => (
  <CharacterSheetContainer>
    <Name />
    <Stats />
    <Personality />
    <Spells>Spells</Spells>
    <Traits>Traits</Traits>
    <Languages>Languages</Languages>
    <Equipment>Equipment</Equipment>
  </CharacterSheetContainer>
)
