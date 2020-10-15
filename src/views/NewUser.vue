<template>
  <b-container>
    <b-row>
      <b-col>
        <label>
          Id
          <b-form-input v-model="id" placeholder="id"> </b-form-input>
        </label>
      </b-col>
      <b-col>
        <label>
          Name
          <b-form-input v-model="name" placeholder="name"> </b-form-input>
        </label>
      </b-col>
      <b-col>
        <label>
          Username
          <b-form-input v-model="username" placeholder="username">
          </b-form-input>
        </label>
      </b-col>
      <b-col>
        <label>
          Email
          <b-form-input v-model="email" placeholder="email"> </b-form-input>
        </label>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label>
          Street
          <b-form-input v-model="street" placeholder="street"> </b-form-input>
        </label>
      </b-col>
      <b-col>
        <label>
          Suite
          <b-form-input v-model="suite" placeholder="suite"> </b-form-input>
        </label>
      </b-col>
      <b-col>
        <label>
          City
          <b-form-input v-model="city" placeholder="city"> </b-form-input>
        </label>
      </b-col>
      <b-col>
        <label>
          Zipcode
          <b-form-input v-model="zipcode" placeholder="email"></b-form-input>
        </label>
      </b-col>
    </b-row>
    <b-button @click="handleSend"> Send </b-button>
  </b-container>
</template>

<script charset="utf-8">
import { postUser } from '../helpers/apiRequest';
import { formatUser } from '../helpers/model';
export default {
  data: () => ({
    id: '',
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    lat: '',
    lng: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
  }),
  methods: {
    handleSend() {
      postUser(
        formatUser(
          this.id,
          this.name,
          this.username,
          this.email,
          this.street,
          this.suite,
          this.city,
          this.zipcode,
          this.phone,
          this.website,
          this.lat,
          this.lng,
          this.companyName,
          this.catchPhrase,
          this.bs
        )
      ).then((response) => alert(`The user id is : ${response.id}`));
    },
  },
};
</script>
