export const container = menuContainerStyle => ({
    reset: true,
    style: { ...menuContainerStyle,
        visibility: menuContainerStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible'), height: '100%' }
})