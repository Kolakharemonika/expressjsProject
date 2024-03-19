class CustomerModel {
    constructor(data) {
        this.uid = data.uid;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
        this.zipcode = data.zipcode;
        this.password = data.password;
    }
}

module.exports = CustomerModel;