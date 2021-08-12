<template>
  <div class="sign-up">
    <form @submit.prevent="callAPI">
      <h2>Sign Up</h2>
      <div class="item">
        <label> Name </label>
        <input type="text" v-model="userObj.name" @keyup.a="enterKeyPressed" />
      </div>
      <div class="item">
        <label> Address </label>
        <textarea type="text" v-model="userObj.address"></textarea>
      </div>
      <div class="item">
        <label> Age </label>
        <input type="number" v-model="userObj.age" />
      </div>
      <div class="item">
        <label> Are you Above 12 Years </label>
        Yes: <input type="radio" v-model="userObj.ageCheck" :value="true" />
        <br />
        No: <input type="radio" v-model="userObj.ageCheck" :value="false" />
        <br />
      </div>
      <div class="item">
        <label> categories </label>
        <div>
          Clothing:
          <input
            type="checkbox"
            v-model="userObj.categories"
            value="clothing"
          />
          <br />
          Jewelery:
          <input
            type="checkbox"
            v-model="userObj.categories"
            value="jewelery"
          /><br />
        </div>
      </div>
      <div class="item">
        <label> Privacy Policy (I agree)</label>
        <div><input type="checkbox" v-model="userObj.privacy" /> <br /></div>
      </div>
      <div class="item">
        <label> Terms & Conditions </label>
        <div><input type="checkbox" v-model="userObj.terms" /> <br /></div>
      </div>
      <div class="item">
        <label> Country </label>
        <select v-model="userObj.country">
          <option value="in">India</option>
          <option value="fr">France</option>
        </select>
      </div>
      <div class="item">
        <label> Country </label>
        <select v-model="userObj.interests" multiple>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <div class="item">
        <input type="submit" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userObj: {
        name: '',
        address: '',
        age: null,
        ageCheck: false,
        categories: [],
        privacy: false,
        terms: false,
        country: '',
        interests: []
      }
    }
  },
  methods: {
    callAPI() {
      console.log(this.userObj)
    },
    enterKeyPressed(event) {
      console.log('key', event)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  label {
    font-size: 18px;
    width: 200px;
    padding: 20px;
  }
}
</style>
