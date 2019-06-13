// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import TrailHeading from '../components/molecules/TrailHeading'
import Text from '../components/atoms/Text'

const Portfolio = ({ style }) => {

    const textProps = {
        className: `text`
    }

    return (
        <Page footer style={style}>
            <TrailHeading title='Portfolio.' />
            <Text {...textProps} css={tw`font-light`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus auctor nulla. Pellentesque fringilla, ante sed ultrices dignissim, ligula nunc rhoncus magna, a interdum ante turpis et erat. Aliquam venenatis vehicula eros, in dapibus lectus sodales nec. Mauris aliquet lectus mauris. Cras laoreet purus lorem, sit amet tincidunt tellus congue vitae. Aliquam molestie turpis eget est gravida, sit amet consectetur diam feugiat. Suspendisse ac eros commodo, cursus urna vel, faucibus urna. Etiam orci lacus, sagittis non porta ac, vestibulum luctus massa. Phasellus finibus consectetur quam, eu suscipit urna tempor vitae. Sed in pretium ipsum, ut porta lacus. Proin at orci at tellus euismod tempus nec et massa. Vestibulum sit amet vestibulum ligula. Ut at urna eros. Nulla ultricies metus et nibh tristique, ac laoreet elit lobortis.</Text>
        </Page>
    )
}

export default Portfolio