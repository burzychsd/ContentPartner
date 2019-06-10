import { navigate } from 'gatsby'

export const containerProps = {
    reset: true,
    style: { maxWidth: 700, minHeight: '50%' }
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
    style: { maxWidth: 600, position: 'absolute', left: '1rem', bottom: 0, zIndex: -1 }
}

export const bulbsProps = {
    className: `bulbs_graphic`,
    style: { position: 'absolute', right: '1rem', bottom: 0, zIndex: -1 }
}