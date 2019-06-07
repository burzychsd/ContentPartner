import { navigate } from 'gatsby'

export const sectionProps = {
    sectionCss: { ...tw`relative w-full flex-col items-center xl:items-start` },
    style: { maxWidth: 960, height: '100%', margin: '0 auto' }
}

export const containerProps = {
    reset: true,
    style: { maxWidth: 700, minHeight: '50%' }
}

export const headingProps = {
    className: 'heading'
}

export const textProps = {
    className: 'text',
    style: { width: '90%', maxWidth: 600 }
}

export const buttonProps = {
    reset: true,
    className: `button`,
    onClick: () => navigate('/proces')
}

export const timelineProps = {
    className: `timeline_graphic`,
    style: { maxWidth: 600, position: 'absolute', left: 0, bottom: 0, zIndex: -1 }
}

export const bulbsProps = {
    className: `bulbs_graphic`,
    style: { position: 'absolute', right: 0, bottom: 0, zIndex: -1 }
}