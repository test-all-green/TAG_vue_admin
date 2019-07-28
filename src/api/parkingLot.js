import { post, get, put, _delete } from '@/utils/http'

export function getParkingLots(page, pageSize) {
  return get('http://localhost:8088/parking-lots?page='+page+'&pageSize='+pageSize);
}

export function postParkingLot(entity) {
  return post('http://localhost:8088/parking-lots',entity);
}