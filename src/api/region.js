import { post, get, put, _delete } from '@/utils/http'

export function getRegion() {
    return get('/regions');
}