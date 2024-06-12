import { http } from '@/support'
import { SegmentInput, SegmentOutput } from '@/types'

export const getSegment = (params: SegmentInput): Promise<SegmentOutput> => {
  return http.get('/Segmento', { params })
}
