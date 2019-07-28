import { post, get, put, _delete } from '@/utils/http'

export function getParkingLots(page, pageSize, condition) {
  return get('/parking-lots',{
    name: condition.name || null,
    min: condition.min || null,
    max: condition.max || null,
    page:page||1,
    pageSize:pageSize||10
    })
}

export function postParkingLot(entity) {
  return post('http://localhost:8088/parking-lots',entity);
}