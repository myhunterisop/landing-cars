export const scrollCalculate = () => {
    window.addEventListener('scroll', () => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })
};