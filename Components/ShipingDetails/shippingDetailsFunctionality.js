//TODO delivery time need to change
export const deliveryTime = ( type, selectedDay ) => {
    const date = new Date();
    let day = date.getDate(),
        month = date.getMonth() < 10 ? `0${ date.getMonth() + 1 }` : date.getMonth() + 1,
        year = date.getFullYear() - 2000;
    if ( selectedDay === `${ day }-${ month }-${ year }` ) {
        const times = [
            {
                clock: 9,
                deliveryTime: '09:00-10:00'
            },
            {
                clock: 10,
                deliveryTime: '10:00-11:00'
            },
            {
                clock: 11,
                deliveryTime: '11:00-12:00'
            },
            {
                clock: 12,
                deliveryTime: '12:00-13:00'
            },
            {
                clock: 13,
                deliveryTime: '13:00-14:00'
            },
            {
                clock: 14,
                deliveryTime: '14:00-15:00'
            },
            {
                clock: 15,
                deliveryTime: '15:00-16:00'
            },
            {
                clock: 16,
                deliveryTime: '16:00-17:00'
            },
            {
                clock: 17,
                deliveryTime: '17:00-18:00'
            },
            {
                clock: 18,
                deliveryTime: '18:00-19:00'
            },
            {
                clock: 19,
                deliveryTime: '19:00-20:00'
            },
            {
                clock: 20,
                deliveryTime: '20:00-21:00'
            }
        ]
        let time = new Date().getHours()
        const timers = []
        times.forEach( timer => {
            if ( timer.clock >= time + 12 ) {
                timers.push( timer.deliveryTime )
            }
        } )
        return timers
    }
    return [
        '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00',
        '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',
        '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00'
    ]
}


export const deliveryDate = () => {
    const date = new Date();
    let day = date.getDate(),
        month = date.getMonth() < 10 ? `0${ date.getMonth() + 1 }` : date.getMonth() + 1,
        year = date.getFullYear() - 2000;
    return [
        `${ day }-${ month }-${ year }`,
        `${ +day + 1 }-${ month }-${ year }`,
        `${ +day + 2 }-${ month }-${ year }`
    ]
}

export const expiresDate = () => {
    const date = new Date();
    let month = date.getMonth(),
        year = date.getFullYear() - 2000;

    return [
        `${ month + 1 }/${ year }`,
        `${ month + 2 }/${ year }`,
        `${ month + 3 }/${ year }`,
        `${ month + 4 }/${ year }`,
        `${ month + 5 }/${ year }`,
        `${ month + 6 }/${ year }`,
        `${ month + 7 }/${ year }`,
    ]
}