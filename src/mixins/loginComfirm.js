export default {
  methods: {
    loginComfirm () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作呦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => this.$router.replace({
            path: '/login',
            query: {
              backUrl: this.$route.fullPath
            }
          }))
        return false
      }
      return true
    }
  }
}
