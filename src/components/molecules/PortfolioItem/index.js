// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

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

export const PortfolioContainer = props => {
    const { companyName, description, isVisible } = props

    const config = { mass: 1, tension: 210, friction: 20 }
    const setStyles = { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(40px)' }
    const spring = { from: { opacity: 0, transform: 'translateY(40px)' } }

    const [portfolioItemStyle, setPortfolioItemStyle] = useSpring(() => ({ ...spring }))

    setPortfolioItemStyle({ ...setStyles, config, delay: 600 })

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
            <AnimatedFlex {...descriptionProps} css={tw`flex-col`} style={portfolioItemStyle}>
                <Text {...textProps} css={tw`font-light mb-8`}>{description}</Text>
                <Text {...textProps} css={tw`font-light`}><span>{
                    <a css={tw`font-body font-bold no-underline text-dark_puce`} href={`${
                        companyName === 'umk' ? 'https://www.wpism.umk.pl/' :
                        companyName === 'ecopywriting' ? 'http://ecopywriting.pl/' :
                        companyName === 'ekotechnologia' ? 'https://sklep.ekotechnologia.eu/' :
                        companyName === 'jafi_sport' ? 'https://www.jafisport.pl/' :
                        companyName === 'obstawiamy_info' ? 'https://www.youtube.com/channel/UCLvMlqIUfR07ArOTZDczYeQ/videos' : null
                    }`} target='_blank' rel='noopener noreferrer'>Adres strony</a>
                }</span></Text>
            </AnimatedFlex>
        </>
    )
}

const PortfolioItem = props => {

    const { companyName, description } = props

    const itemContainerProps = {
        reset: true,
        className: 'portfolio_item_container'
    }

    return (
        <Flex {...itemContainerProps}>
            <VisibilitySensor once>
                {({ isVisible }) => (
                    <PortfolioContainer
                    companyName={companyName}
                    description={description}
                    isVisible={isVisible} />
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