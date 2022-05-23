exports.getReadableDate = (ISOStringDate) => {
    const date = new Date(ISOStringDate);
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (dt < 10) dt = '0' + dt;
    if (month < 10) month = '0' + month;
    if (minute < 10) minute = '0' + minute;
    if (hour < 10) hour = '0' + hour;

    return `${dt}/${month}/${year} à ${hour}:${minute}`
}