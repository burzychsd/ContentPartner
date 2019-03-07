import React, { PureComponent, Fragment } from "react"
import shortid from 'shortid'

import Layout from "../components/template/Layout"
import SEO from "../components/template/seo"
import Section from '../components/atoms/Section'
import Text from '../components/atoms/Text'
import Graphic from '../components/molecules/Graphic'

class IndexPage extends PureComponent {

  state = {
    height: 0
  }

  componentDidMount = async () => {
    await this.setState({ height: window.innerHeight })
    await window.addEventListener('resize', this.updateHeight)
  }

  componentWillUnmount = () => window.removeEventListener('resize', this.updateHeight)

  updateHeight = () => this.setState({ height: window.innerHeight })

  render() {

    const graphicStyles = {
      position: 'absolute',
      bottom: 0,
      zIndex: -1
    }

    const sectionMap = {
      first: {
        title: 'Lorem ipsum dolor sit cupi?',
        description: `Nullam lacinia nisl id lobortis ultricies. Duis interdum purus nec 
                      tincidunt lacinia. Sed vel nibh dolor. In varius urna sed lectus iaculis consequat. 
                      Vivamus placerat tempor enim, at aliquet mi. Nunc maximus accumsan fringilla. Proin id commodo dui.`,
        height: '90%'
      },
      second: {
        title: 'Sed in vitae commodo.',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt. Nunc maximus accumsan fringilla. Proin id commodo dui. Sed vel nibh dolor. 
                      In varius urna sed lectus iaculis consequat. Pellentesque non dolor tincidunt felis eiusmod tempor incididunt ut labore et dolore 
                      magnaaliqua.`,
        height: '55%'
      },
      third: {
        title: 'Morbi efficitur dictum orci.',
        description: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. 
                      Ut enim ad minim. Finibus efficitur urna. Praesent tincidunt ullamcorper mauris a ultrices. 
                      Nullam sed mi nisl. Maecenas volutpat nisl eget cursus rutrum.`,
        height: '45%'
      },
      fourth: {
        title: 'Sed sed fau mauris.',
        description: `Donec posuere odio in purus dignissim, 
                      non fermentum mi lobortis. Pellentesque non dolor tincidunt felis eiusmod tempor incididunt ut labore et dolore 
                      magnaaliqua. Nulla neque mi, sollicitudin ac neque vitae, finibus efficitur urna. Praesent tincidunt ullamcorper mauris a ultrices. 
                      Nullam sed mi nisl. Maecenas volutpat nisl eget cursus rutrum.`,
        height: '45%'
      },
      fifth: {
        title: 'Amet suscipit neque donec sed.',
        description: `Curabitur ac ornare tortor. 
                      Cras vel tristique sapien. Vivamus sit amet suscipit neque. Donec sed ex nec orci congue tempor. 
                      Morbi et volutpat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                      per inceptos himenaeos. Morbi quam nunc, suscipit non neque id, lobortis sollicitudin felis.`,
        height: '65%'
      }
    }

    const sections = Object.keys(sectionMap).map((section, i) => {

      const condition = (i + 1) % 2 === 0 
      return (
        <Fragment key={shortid.generate()}>
          <Section height={`calc(${this.state.height}px - 115px)`} maxHeight={450} minHeight={350} margin={i === 0 ? null : '115px auto 0 auto'}>
            <Text as='h1' fontWeight='200' fontMin={30} fontMax={34}>{sectionMap[section]['title']}</Text>
              <Graphic side={`${condition ? 'align-self: flex-end' : null }`} status={i + 1} left={!condition ? 0 : null} right={condition ? 0 : null} 
              styles={{ style: { ...graphicStyles, left: condition ? null : 0, right: condition ? 0 : null, height: sectionMap[section]['height']} }} />
          </Section>
          <Section>
            <Text width='90%' fontWeight='300' fontMin={16} fontMax={20} margin='1em auto'>{sectionMap[section]['description']}</Text>
          </Section>
        </Fragment>
      )
    })

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`Home`, `content`, `copywriting`]} />
        {sections}
      </Layout>
    )
  }
} 

export default IndexPage
