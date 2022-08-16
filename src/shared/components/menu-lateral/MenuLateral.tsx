import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { Box } from '@mui/system'

import React from 'react'
import { useDrawerContext } from '../../context'

interface IMenuLateral {
  children: React.ReactNode
}

interface IListItemLinkProps {
  to: string
  icon: string
  label: string
  onClick: (() => void) | undefined
}
const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick
}) => {
  const navigate = useNavigate()

  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen, drawerOptions, toggleDrawerOpen } = useDrawerContext()

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://yt3.ggpht.com/yti/AJo0G0nEf2YchMrqLzEK9fiRStX6YLFqtF06uh5sqguTnw=s88-c-k-c0x00ffffff-no-rj-mo"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
