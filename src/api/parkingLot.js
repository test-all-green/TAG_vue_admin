import { post, get, put, _delete } from '@/utils/http'

export function getParkingLots() {
  return get('/parking-lots');
}