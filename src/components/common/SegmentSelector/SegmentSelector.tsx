'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { CheckIcon, ChevronLeft, EditIcon, SearchIcon } from 'lucide-react'
import {
  Box,
  Button,
  IconButton,
  Container,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Input,
} from '@/components'
import { getSegment } from '@/services'
import { SegmentProps } from './SegmentSelector.types'

export const SegmentSelector = () => {
  const [edit, setEdit] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [segments, setSegments] = useState<SegmentProps[]>([])
  const [selectedSegment, setSelectedSegment] = useState<SegmentProps>({
    id: '',
    descricao: 'Serviço de Beleza',
  })

  const fetchSegments = async (descricao: string) => {
    try {
      const response = await getSegment({ descricao })
      setSegments(response.list)
    } catch (error) {
      console.error('Erro ao buscar segmentos:', error)
    }
  }

  const handleEditClick = () => {
    setEdit(true)
  }

  const handleSegmentSelect = (segment: SegmentProps) => {
    setSelectedSegment(segment)
    setEdit(false)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (search) {
      fetchSegments(search)
    }
  }, [search])

  return (
    <>
      <Container maxWidth="md">
        <Box padding={4}>
          <Typography
            align="center"
            variant="h2"
            fontSize={32}
            fontWeight={500}
            color="primary"
            mb={3}
          >
            Segmento da Empresa
          </Typography>
          <Typography align="center" fontSize={18}>
            Confirme o segmento que sua empresa atua para personalizarmos sua
            experiência em nosso aplicativo.
          </Typography>
        </Box>

        <Box mt={10}>
          {edit ? (
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Input
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Ex. Restaurante"
                  endIcon={<SearchIcon />}
                  sx={{ width: '100%' }}
                />
              </Box>

              <List
                sx={{
                  maxHeight: '300px',
                  overflowY: 'scroll',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {segments.map((segment) => (
                  <ListItem component="div" disablePadding key={segment.id}>
                    <ListItemButton
                      onClick={() => handleSegmentSelect(segment)}
                    >
                      <ListItemText>{segment.descricao}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
                {segments.length === 0 && (
                  <ListItem component="div" disablePadding>
                    <ListItem>
                      <ListItemText>
                        Informe acima o segmento para continuar.
                      </ListItemText>
                    </ListItem>
                  </ListItem>
                )}
              </List>
            </Box>
          ) : (
            <Box justifyContent="center">
              <Typography align="center">Segmento Selecionado:</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <Typography
                  align="center"
                  color="primary"
                  variant="h4"
                  fontSize={32}
                  fontWeight={500}
                >
                  {selectedSegment.descricao}
                </Typography>
                <IconButton color="primary" onClick={handleEditClick}>
                  <EditIcon />
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>
      </Container>

      <Box
        display="flex"
        justifyContent="space-between"
        position="fixed"
        bottom="0"
        padding={4}
        sx={{
          borderTop: 1,
          borderColor: '#ddd',
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        <Button startIcon={<ChevronLeft />} size="large">
          Voltar
        </Button>
        <Button
          color="primary"
          startIcon={<CheckIcon />}
          variant="contained"
          disableElevation
          size="large"
        >
          Finalizar cadastro
        </Button>
      </Box>
    </>
  )
}
