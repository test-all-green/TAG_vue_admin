import { post, get, put, _delete } from '@/utils/http'

export function getUser() {
  return get('/parking-staffs');
}
export function testAPI(data) {
  return post('/api',data);
}
