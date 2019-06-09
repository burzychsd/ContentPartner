export const container = (menuContainerStyle, headerHeight) => ({
    reset: true,
    style: { ...menuContainerStyle,
        visibility: menuContainerStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible'),
        top: headerHeight / 2 + 40, minHeight: `calc(100% - ${headerHeight / 2 + 40}px)`,
        paddingTop: headerHeight / 2 }
})