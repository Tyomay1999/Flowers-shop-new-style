export const deliveryTime = [
    '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00',
    '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',
    '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00'
]


export const deliveryDate = () => {
    const date = new Date();
        let day = date.getDate(),
        month = date.getMonth() < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1,
        year = date.getFullYear();
       return [
        `${day}-${month}-${year}`,
            `${+day + 1}-${month}-${year}`,
            `${+day + 2}-${month}-${year}`
        ]
}

export const expiresDate = () => {
    const date = new Date();
    let month = date.getMonth() ,
        year = date.getFullYear();

    return [
        `${month+1}-${year}`,
        `${month+2}-${year}`,
        `${month+3}-${year}`,
        `${month+4}-${year}`,
        `${month+5}-${year}`,
        `${month+6}-${year}`,
        `${month+7}-${year}`,
    ]
}