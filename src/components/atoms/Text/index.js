// DEPENDENCIES
import React from 'react'

// COMPONENTS
import { TextItem } from './styled'

const Text = (props) => (
    <TextItem {...props}>
    {props.children}</TextItem>
)

export default Text