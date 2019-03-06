// DEPENDENCIES
import React from "react"

// COMPONENTS
import { PageTransition } from './styled'

class PageTransition extends React.Component {

    container = React.createRef()

    render() {
        const { children } = this.props

        return (
            <Wrapper ref={this.container}>
                {children}
            </Wrapper>
        )
    }
}

export default PageTransition