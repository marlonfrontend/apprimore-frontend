import { http } from '@/support'
import { Segment, SegmentOutput } from '@/types'

export const getSegment = (params: Segment): Promise<SegmentOutput> => {
  return http.get('/Segmento', { params })
}
