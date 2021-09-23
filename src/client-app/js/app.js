$(() => {
    // JSON Container
    const seats = `{
        "seats": [
            {
                "number": 12,
                "bus": {
                    "manufacturer": "Mercedes-Benz",
                    "year": 2019,
                    "model": "MCV 800"
                },
                "price": 20,
                "booked": true
            },
            {
                "number": 7,
                "bus": {
                    "manufacturer": "Volkswagen",
                    "year": 2021,
                    "model": "17.230 OD / ODS"
                },
                "price": 20,
                "booked": false
            }
        ]
    }`;

    const jsonData = JSON.parse(seats);
    console.log(jsonData);
    let seatList = $('#bookingInfo').append('<ul></ul>');


    for (let i = 0; i < jsonData.seats.length; i++) {
        let seat = $('<li></li>');
        seat.append(`<div>Seat Nº: ${jsonData.seats[i].number}</div>`);
        seat.append(`<div>Bus: ${jsonData.seats[i].bus.manufacturer} ${jsonData.seats[i].bus.model}</div>`);
        seat.append(`<div>Price: $ ${jsonData.seats[i].price}</div>`);
        seat.append(`<div>${jsonData.seats[i].booked ? 'Unavailable' : 'Available'}</div>`);

        seatList.append(seat);
        seatList.append('<hr>')
    }
});