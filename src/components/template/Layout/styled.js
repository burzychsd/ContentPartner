// DEPENDENCIES
import styled, { css } from  'styled-components'

// STYLED_SYSTEM
import { Flex } from '../../../design_system/flexbox'

// STYLED_COMPONENTS
const cubic = `cubic-bezier(0.86, 0, 0.07, 1)`
const transition = css`
  transition: all 0.4s ${cubic};
`
const styles = css`
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background: #F6F5F5;
  z-index: 1001;
  justify-content: center;
  align-items: center;
`

export const SiteWrapper = styled(Flex)`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 2;

  ${transition};
`

export const FirstTransition = styled(Flex)`
    ${styles};
    width: 0%;
`

export const SecondTransition = styled(Flex)`
  ${styles};
  width: 100%;
  padding: 1em;

  ${transition};
`

export const ImageDiv = styled(Flex)`
  width: 100%;
  height: 60%;
  maxHeight: 411px;
  justify-content: center;
`