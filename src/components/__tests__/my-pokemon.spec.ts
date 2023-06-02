import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import myPokemonVue from '../my-pokemon.vue'

describe( 'my-pokemon', () => {
  it( 'renders span properly',
    async () => {
      render( myPokemonVue )

      const pokemon = await screen.findByText( 'Get Pokemon' )
      await fireEvent.click( pokemon )
      const value = await screen.findByText( 'bulbasaur' )
      // assert
      expect( value.innerHTML ).toBe( 'bulbasaur' )
    } )

} )
