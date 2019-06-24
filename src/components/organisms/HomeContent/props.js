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
    onClick: () => navigate('/proces/'),
    style: { ...style, margin: '1rem 0' }
})

export const timelineProps = {
    className: `timeline_graphic`,
    style: { position: 'absolute', left: '1rem', bottom: 0, zIndex: -1 }
}

export const bulbsProps = {
    className: `bulbs_graphic`,
    style: { position: 'absolute', right: 0, bottom: 0, zIndex: -3 }
}