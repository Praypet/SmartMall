import request from '@/utils/request'

export const categoryList = () => {
  return request.get('/category/list')
}
