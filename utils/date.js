function getDayOfTheWeek(utc) {
    // pornind de la unix date, inmultim cu 1000 pt a creea data

    const date = new Date(utc * 1000);
    const day = date.getDay();

    switch (day) {
        case 0:
            return "Duminică";
        case 1:
            return "Luni";
        case 2:
            return "Marți";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sâmbătă";
    }
}

function getHour(utc) {
    // pornind de la unix date, inmultim cu 1000 pt a creea data
    const date = new Date(utc * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}