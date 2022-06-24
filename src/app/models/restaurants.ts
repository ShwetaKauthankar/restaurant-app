export interface RestaurantModel {
    id: number,
    name: any,
    neighborhood: any,
    photograph: any,
    address: any,
    latlng: {
        lat: any,
        lng: any
    },
    cuisine_type: any,
    operating_hours: {
        Monday: any,
        Tuesday: any,
        Wednesday: any,
        Thursday: any,
        Friday: any,
        Saturday: any,
        Sunday: any
    },
    reviews: [
        {
            name: any,
            date: any,
            rating: any,
            comments: any
        }
    ]
}