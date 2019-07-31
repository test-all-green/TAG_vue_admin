import { post, get, put, _delete } from '@/utils/http'

export function getShareParkingLots(page, pageSize) {
  return get('/share-parking-lots?page='+page+'&pageSize='+pageSize);
}
