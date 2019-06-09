// DEPENDENCIES
import React, { useState, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import { Location } from '@reach/router'

// COMPONENTS
import Layout from './src/components/templates/Layout'
import Flex from './src/components/atoms/Flex'

const AnimatedFlex = animated(Flex)

export default ({ element }) => (
    <Location>
        {({ location }) => 
            <Layout location={location}>
                <main
                style={{ height: `100%`, minHeight: 480, display: 'block' }}>
                    {element}
                </main>
            </Layout>
        }
    </Location>
)