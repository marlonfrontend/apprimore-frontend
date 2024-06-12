'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Container,
} from '@mui/material'
import { Segment } from './SegmentSelector.types'
import { getSegment } from '@/services'

export const SegmentSelector = () => {
  const [edit, setEdit] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [segments, setSegments] = useState<Segment[]>([])
  const [selectedSegment, setSelectedSegment] = useState<Segment>({
    id: '',
    descricao: 'Serviço de Beleza',
  })

  useEffect(() => {
    if (search) {
      fetchSegments(search)
    }
  }, [search])

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

  const handleSegmentSelect = (segment: Segment) => {
    setSelectedSegment(segment)
    setEdit(false)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

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
          <Typography align="center">
            Confirme o segmento que sua empresa atua para personalizarmos sua
            experiência em nosso aplicativo.
          </Typography>
        </Box>

        <Box mt={10}>
          {edit ? (
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <TextField
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Buscar segmento"
                  sx={{ width: '100%' }}
                />
              </Box>

              <List>
                {segments.map((segment) => (
                  <ListItem component="div" disablePadding key={segment.id}>
                    <ListItemButton
                      onClick={() => handleSegmentSelect(segment)}
                    >
                      <ListItemText>{segment.descricao}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
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
                <Button onClick={handleEditClick}>Editar</Button>
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
        <Button size="large">Voltar</Button>
        <Button
          color="primary"
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
