
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
};

export const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const readableDateTime = dateTime.toLocaleString(undefined, options);
    return readableDateTime
}