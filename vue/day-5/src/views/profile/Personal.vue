<template>
  <div class="personal">
    <h3>Profile Section</h3>
    <div class="item">
      <div class="name">FirstName</div>
      <div class="value">
        {{ user?.name?.firstname }}
      </div>
    </div>
    <div class="item">
      <div class="name">LastName</div>
      <div class="value">
        {{ user?.name?.lastname }}
      </div>
    </div>
    <div class="item">
      <div class="name">Email</div>
      <div class="value">
        {{ user.email }}
      </div>
    </div>
    <button @click="showUpdate = true">Edit Profile</button>
    <modal v-if="showUpdate" @closed="showUpdate = false">
      <template v-slot:header>Update User </template>
      <template v-slot:default>
        Email:
        <input v-model="userModified.email" />
      </template>
      <template v-slot:footer>
        <button @click="update">Update</button>
      </template>
    </modal>
  </div>
</template>
<script>
import { fetchUser, updateUser } from '@/services/user'
import { cloneDeep } from 'lodash'
import Modal from '@/components/Modal'
export default {
  components: {
    Modal
  },
  data() {
    return {
      user: {},
      userModified: {},
      showUpdate: false
    }
  },
  created() {
    fetchUser().then((res) => {
      this.user = cloneDeep(res)
      this.userModified = cloneDeep(res)
    })
  },
  methods: {
    update() {
      updateUser(this.userModified)
        .then((res) => {
          console.log(res)
          alert('user Updated successfully')
        })
        .catch((res) => {
          console.log(res)
          alert('update Error')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  margin: 20px;
  display: flex;
  align-items: center;
  .name {
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
  }
  .value {
    font-size: 20px;
  }
}
</style>
