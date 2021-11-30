export default class Parser {
    parseDateTimeToDate(dateTime) {
        const date = new Date(dateTime);
        let day = date.getDate();
        let minutes = date.getMinutes();
        let month = date.getMonth() + 1;

        if(day < 10) {
            day = `0${day}`;
        }

        if(minutes < 10) {
            minutes = `0${minutes}`;
        }

        if(month < 10) {
            month = `0${month}`;
        }

        return `${day}.${month}.${date.getFullYear()} ${date.getHours()}:${minutes}`;
    }
}