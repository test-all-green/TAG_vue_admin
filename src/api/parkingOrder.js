import { post, get, put, _delete } from '@/utils/http'

export function getParkingOrders() {
  return get('/parking-orders');
}
