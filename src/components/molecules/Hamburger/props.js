export const containerProps = {
    reset: true,
    className: `hamburger_container`
}

export const barProps = {
    reset: true,
    className: `hamburger_bar`
}

export const barHiddenProps = {
    reset: true,
    style: { transform: 'translateY(-50%)', top: '50%', left: 0, right: 0, margin: '0 auto' }
}

export const barCss = { ...tw`bg-dark_puce` }
export const barCssHidden = { ...tw`absolute w-full h-px bg-dark_puce` }