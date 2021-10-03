export class User {
    constructor(id, name, username, email, website, phone, city, street, suite, zipcode, lat, lng, bs, catchPhrase, companyName) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.website = website;
        this.address = {
            city: city,
            geo: {
                lat,
                lng
            },
            street: street,
            suite: suite,
            zipcode: zipcode
        };
        this.company = {
        bs: bs,
        catchPhrase: catchPhrase,
        name: companyName
        };
        this.phone = phone;
    }
}