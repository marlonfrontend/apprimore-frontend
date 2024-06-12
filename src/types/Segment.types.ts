export type Segment = {
  id: string
  descricao: string
}

export type SegmentInput = {
  page?: number
  pageSize?: number
  descricao: Segment['descricao']
}

export type SegmentOutput = {
  list: Segment[]
}
