// DEPENDENCIES
import React from 'react'

// COMPONENTS
import { FlexDiv, Bar } from './styled'

const Hamburger = ({ clicked, innerRefs, props }) => (
    <FlexDiv {...props} onClick={(e) => clicked(e)}>
        <Bar top={22} ref={innerRefs.first} />
        <Bar bottom={22} ref={innerRefs.second} />
    </FlexDiv>
)

export default Hamburger