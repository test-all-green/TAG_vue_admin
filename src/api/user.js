import { post, get, put, _delete } from '@/utils/http'

export function getUser(page, pageSize) {
  return get('/employees',{
    page:page,
    pageSize:pageSize
  })
}
export function addUser(data) {
  return post('/employees',data);
}
export function updateUser(data){
  return put('/employees/'+data.id,data)
}