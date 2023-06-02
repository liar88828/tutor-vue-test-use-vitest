import { beforeAll, afterEach, afterAll } from "vitest";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { pokemonResponse } from "./mockPokemon";
import 'whatwg-fetch'


export const restHandlers =
  [
    rest.get( 'https://pokeapi.co/api/v2/pokemon',
      (
        req, res,
        ctx
      ) => {
        return res(
          ctx.status( 200 ),
          ctx.json( pokemonResponse
          ) )

      } )
  ]

const server = setupServer( ...restHandlers )


// start server before all test

beforeAll( () => server.listen( {
  onUnhandledRequest: 'error'
} ) )

// close after test
afterAll( () => server.close() )

// Reset handler after each test 'important for test isolation
afterEach( () => server.resetHandlers() )
