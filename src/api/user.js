import { post, get, put, _delete } from '@/utils/http'

export function testAPI(data) {
  return post('/api',data);
}
