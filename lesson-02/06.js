let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};

let passportWithAddressClone = JSON.parse(JSON.stringify(passportWithAddress));
passportWithAddressClone.address.city = "Bobryisk";


console.log(passportWithAddress.address.city);
console.log(passportWithAddressClone.address.city)