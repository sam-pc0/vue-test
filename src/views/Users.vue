<template>
  <div>
    <table class="table table-hover">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Options</th>
      </tr>
      <tr v-for="user of users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button @click="handleView" :id="user.id" class="btn btn-primary">
            View
          </button>
        </td>
      </tr>
    </table>

    <b-modal v-model="modalShow">
      <b-container>
        <b-row>
          <b-col>
            <label>
              Id
              <b-form-input v-model="selectedUser.id" placeholder="id">
              </b-form-input>
            </label>
          </b-col>
          <b-col>
            <label>
              Name
              <b-form-input v-model="selectedUser.name" placeholder="name">
              </b-form-input>
            </label>
          </b-col>
          <b-col>
            <label>
              Username
              <b-form-input
                v-model="selectedUser.username"
                placeholder="username"
              >
              </b-form-input>
            </label>
          </b-col>
          <b-col>
            <label>
              Email
              <b-form-input v-model="selectedUser.email" placeholder="email">
              </b-form-input>
            </label>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label>
              Street
              <b-form-input
                v-model="selectedUser.address.street"
                placeholder="street"
              >
              </b-form-input>
            </label>
          </b-col>
          <b-col>
            <label>
              Suit
              <b-form-input
                v-model="selectedUser.address.suit"
                placeholder="suit"
              >
              </b-form-input>
            </label>
          </b-col>
          <b-col>
            <label>
              City
              <b-form-input
                v-model="selectedUser.address.city"
                placeholder="city"
              >
              </b-form-input>
            </label>
          </b-col>
          <b-col>
            <label>
              Zipcode
              <b-form-input
                v-model="selectedUser.address.zipcode"
                placeholder="email"
              ></b-form-input>
            </label>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script charset="utf-8">
import { getUsers } from '../helpers/apiRequest';
import { User } from '../helpers/model';

export default {
  name: 'Users',
  mounted() {
    getUsers()
      .then((users) => (this.users = users))
      .catch(console.error);
  },
  data: () => ({
    users: [],
    selectedUser: new User(),
    modalShow: false,
  }),
  methods: {
    handleView(e) {
      this.selecteUser = this.users.find((user) => user.id == e.target.id);
      this.modalShow = true;
      console.log(this.selectedUser);
    },
  },
};
</script>
