import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material'

interface IFerramentasDeDetalhesProps {
  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalvarEFechar?: boolean

  aoClicarEmNovo?: () => void
  aoClicarEmVoltar?: () => void
  aoClicarEmApagar: () => void
  aoClicarEmSalvar?: () => void
  aoClicarEmSalvarEFechar?: () => void
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar
}) => {
  const theme = useTheme()
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      paddingX={2}
      padding={1}
      display="flex"
      alignItems="center"
      gap={1}
      component={Paper}
    >
      {mostrarBotaoSalvar && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarEFechar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e Voltar
        </Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          variant="outlined"
          color="primary"
          onClick={aoClicarEmApagar}
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}

      <Divider orientation="vertical" variant="middle" />

      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          color="primary"
          onClick={aoClicarEmVoltar}
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </Box>
  )
}
