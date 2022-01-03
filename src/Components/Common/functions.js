const debounce = (callBack,wait) => {
    let timer
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => callBack(...args), wait)
    }
}

export const handlerDebounce = debounce(callBack => callBack(), 300)