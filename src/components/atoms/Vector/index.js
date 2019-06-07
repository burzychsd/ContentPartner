// DEPENDENCIES
import React, { memo } from 'react'
import styled from 'styled-components'

export const Img = styled.img`
    ${props => props.reset ? null : tw`w-full h-auto`};
`

const Vector = (props) => {

    const { css, src, alt, style } = props

    const imgProps = { src, alt, style }

    return (
        <Img css={css} {...imgProps} />
    )
}

export default memo(Vector)