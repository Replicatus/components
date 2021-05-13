/**
 * @param str string | number | null | undefined строка
 * @param unit string размерность default px
 * @return string | undefined
 * */
export function convertToUnit (str,  unit = 'px') {
    if (str == null || str === '') {
        return undefined
    } else if (Number.isNaN(str)) {
        return String(str)
    } else {
        return `${Number(str)}${unit}`
    }
}