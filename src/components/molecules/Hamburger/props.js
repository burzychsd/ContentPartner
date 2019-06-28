export const containerProps = {
    reset: true,
    className: `hamburger_container`
}

export const barProps = {
    reset: true,
    className: `hamburger_bar`
}

export const barHiddenProps = style => ({
    reset: true,
    style: { transform: 'translateY(-50%)', top: '50%', left: 0, right: 0, margin: '0 auto', ...style }
})

export const barCss = { ...tw`bg-dark_puce` }
export const barCssHidden = { ...tw`absolute w-full h-px bg-dark_puce` }