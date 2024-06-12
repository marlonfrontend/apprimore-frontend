import { http } from '@/support'

export const getSegment = (params: any): Promise<any> => {
  return http.get('/Segmento', { params })
}
