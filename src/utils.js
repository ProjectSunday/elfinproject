export const debounce = (fn, timeout) => {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, timeout)
    }
}