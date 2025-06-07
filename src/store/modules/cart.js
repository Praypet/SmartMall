import { getcartList, changeCartCount, delCart } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: [],
      cartNum: 0
    }
  },
  mutations: {
    setCartList (state, obj) {
      state.cartList = obj.list
      state.cartNum = obj.cartTotal
    },
    isCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    isAllCheck (state, isAllChecked) {
      state.cartList.forEach(item => { item.isChecked = isAllChecked })
    },
    changeCart (state, obj) {
      state.cartNum = obj.cartTotal
      const goods = state.cartList.find(item => item.goods_id === obj.goodsId)
      goods.goods_num = obj.goodsNum
    }
  },
  actions: {
    async getCartActions (context) {
      const { data } = await getcartList()
      data.list.forEach(item => { item.isChecked = true })
      context.commit('setCartList', data)
    },
    async changeCartCount (context, obj) {
      const { goodsNum, goodsId, goodsSkuId } = obj
      const { data: { cartTotal } } = await changeCartCount(goodsId, goodsNum, goodsSkuId)
      context.commit('changeCart', { goodsId, cartTotal, goodsNum })
    },
    async delCartGoods (context) {
      const delGoods = context.state.cartList.filter(item => item.isChecked === true)
      const delGoodsId = delGoods.map(item => item.id)
      await delCart(delGoodsId)
      Toast('删除成功')
      context.dispatch('getCartActions')
    }
  },
  getters: {
    selCartGoods (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCartNum (state, getters) {
      if (getters.selCartGoods.length === 0) return 0
      return getters.selCartGoods.reduce((sum, item) => sum + item.goods_num, 0)
    },
    sumPrice (state, getters) {
      if (getters.selCartGoods.length === 0) return 0
      return getters.selCartGoods.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0).toFixed(2)
    }
  }
}
