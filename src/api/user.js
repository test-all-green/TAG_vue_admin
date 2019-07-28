import { post, get, put, _delete } from '@/utils/http'

export function getUser(page, pageSize) {
  return get('/parking-staffs',{
    pageNum:page,
    pageSize:pageSize
  })
}
export function addUser(data) {
  return post('/parking-staffs',data);
}
export function updateUser(data){
  return put('/parking-staffs/'+data.id,data)
}