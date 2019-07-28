import { post, get, put, _delete } from '@/utils/http'

export function getParkingOrders(page, pageSize) {
  return get('/parking-orders?page='+page+'&pageSize='+pageSize);
}
