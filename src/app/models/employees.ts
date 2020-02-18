export class Employees {
    id: number;
    name: string;
    username: string;
    email: string
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number
        geo: {
            lat: string;
            lng: string
        }
    };
    phone: string;
    website: string;
    company: {
        name:string;
    }

}