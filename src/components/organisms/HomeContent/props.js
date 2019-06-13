import { navigate } from 'gatsby'

export const containerProps = {
    className: `home_content--container`,
    reset: true,
    style: { maxWidth: 700 }
}

export const textProps = style => ({
    className: 'text',
    style: { maxWidth: 600, ...style }
})

export const buttonProps = style => ({
    reset: true,
    className: `button`,
    onClick: () => navigate('/proces'),
    style
})

export const timelineProps = {
    className: `timeline_graphic`,
    style: { maxWidth: 600, position: 'absolute', left: '1rem', bottom: 0, zIndex: -1 }
}

export const bulbsProps = {
    className: `bulbs_graphic`,
    style: { position: 'absolute', right: '6.5rem', bottom: 0, zIndex: -1 }
}