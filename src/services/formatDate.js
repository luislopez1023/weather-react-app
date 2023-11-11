export function formatHourDate(date) {
    const options = {
        hour: "2-digit",
        minute: "2-digit"
    }
    return new Date(date * 1000).toLocaleTimeString([], options)
}