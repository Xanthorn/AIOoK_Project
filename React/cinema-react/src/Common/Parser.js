export default class Parser {
    parseDateTimeToDate(dateTime) {
        const date = new Date(dateTime);
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
}