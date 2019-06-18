// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring/renderprops'

// COMPONENT
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import UMK from './../../../images/svg/umk.svg'
import Ecopywriting from './../../../images/svg/eCopywriting.svg'
import Ekotechnologia from './../../../images/svg/ekotechnologia.svg'
import JafiSport from './../../../images/svg/jafi_sport.svg'
import ObstawiamyInfo from './../../../images/svg/obstawiamy_info.svg'
import VisibilitySensor from './../../atoms/VisibilitySensor'

const AnimatedFlex = animated(Flex)

// STYLES
import './PortfolioItem.css'

const PortfolioItem = props => {

    const { companyName, description } = props

    const itemContainerProps = {
        reset: true,
        className: 'portfolio_item_container'
    }

    const companyLogoContainerProps = {
        reset: true,
        className: 'company_logo_container'
    }

    const companyLogoProps = {
        preserveAspectRatio: `xMidYMid meet`
    }

    const descriptionProps = {
        reset: true,
        className: 'portfolio_description'
    }

    const textProps = {
        className: 'text'
    }

    return (
        <Flex {...itemContainerProps}>
            <VisibilitySensor once>
                {({ isVisible }) => (
                    <>
                        <Flex {...companyLogoContainerProps}>
                            {
                                companyName === 'umk' ? isVisible && <UMK {...companyLogoProps} /> :
                                companyName === 'ecopywriting' ? isVisible && <Ecopywriting {...companyLogoProps} /> :
                                companyName === 'ekotechnologia' ? isVisible && <Ekotechnologia {...companyLogoProps} /> :
                                companyName === 'jafi_sport' ? isVisible && <JafiSport {...companyLogoProps} /> :
                                companyName === 'obstawiamy_info' ? isVisible && <ObstawiamyInfo {...companyLogoProps} /> : null
                            }
                        </Flex>
                        <Spring
                        native
                        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
                        delay={600}>
                            { props => 
                                <AnimatedFlex {...descriptionProps} style={props}>
                                    <Text {...textProps} css={tw`font-light leading-relaxed`}>{description}</Text>
                                </AnimatedFlex> 
                            }
                        </Spring>
                    </>
                )}
            </VisibilitySensor>
        </Flex>
    )
}

PortfolioItem.propTypes = {
    companyName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default memo(PortfolioItem)