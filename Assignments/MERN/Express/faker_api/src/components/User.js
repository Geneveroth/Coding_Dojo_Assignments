import React from 'react'

class User{
    constructor(){
        this._id= faker.random.uuid();
        this.firstName= faker.firstName();
        this.lastName= faker.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password= faker.internet.password();
    }
}

export default User;