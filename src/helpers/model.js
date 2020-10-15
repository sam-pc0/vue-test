export class User {
  constructor() {
    this.id = '';
    this.name = '';
    this.username = '';
    this.email = '';
    this.address = {};
    this.phone = '';
    this.geo = '';
    this.website = '';
    this.company = {};
  }
}

export const formatUser = ({
  id,
  name,
  username,
  email,
  street,
  suite,
  city,
  zipcode,
  phone,
  website,
  lat,
  lng,
  companyName,
  catchPhrase,
  bs,
}) =>
  JSON.stringify({
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
    },
    geo: {
      lat,
      lng,
    },
    phone,
    website,
    company: {
      name: companyName,
      catchPhrase,
      bs,
    },
  });
