import { post, get, put, _delete } from '@/utils/http'

export function getStaffCharacter() {
    return get('/staff-characters');
}