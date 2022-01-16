<template>
  <span :title="username">{{ slug }}</span>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      setUser: "checkLogin",
    }),
  },
  computed: { ...mapGetters(["username", "slug"]) },
  created() {
    this.setUser();
  },
};
</script>
<style scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #fff;
  color: #35495e;
  text-shadow: 1px 0 1px #2c79d1;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
}
</style>
