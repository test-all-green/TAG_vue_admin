import { post, get, put, _delete } from '@/utils/http'

export function getUser() {
  return get('/parking-staffs?pageNum=1&pageSize=4');
}
export function addUser(data) {
  return post('/parking-staffs',data);
}
