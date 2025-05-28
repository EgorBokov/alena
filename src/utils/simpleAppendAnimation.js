export const simpleAppendAnimation = () => ({
    animate: { opacity: 1, transform: 0 },
    initial: { opacity: 0, transformY: '100px' },
    transition: {
        duration: 0.2,
    }
})