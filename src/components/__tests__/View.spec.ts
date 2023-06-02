import { render, screen } from '@testing-library/vue'
import View from '../View.vue'
import { describe, it, expect } from 'vitest'



describe( 'View', () => {
  const viewText = 'Hello From View Test'
  it( 'render span correctly', async () => {
    // arranged
    const viewId = 'viewId'
    render( View, {
      props: { element: "span", id: viewId },
      slots: { default: viewText }
    } )

    const view = await screen.findByText( viewText )
    //assert
    expect( view.id ).toBe( viewId )
    expect( view.innerHTML ).toBe( viewText )
    expect( view.nodeName ).toBe( "SPAN" )
  } )
  it( 'snap shot matches', () => {

    const wrapper = render( View, {
      props: {
        element: "div"
      }
    } )

    expect( wrapper ).toMatchSnapshot()

  } )


} )