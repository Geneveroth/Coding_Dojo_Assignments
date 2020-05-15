import React from 'react'

class Company{
    constructor(){
        this._id= faker.random.uuid();
        this.name= faker.company.companyName();
        this.address.street= faker.address.streetAddress();
        this.address.city= faker.address.city();
        this.address.state= faker.address.state();
        this.address.zipCode =faker.address.zipCode();
        this.address.country= faker.address.country();
    }
}

export default Company;