import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../container/LoginMutation'
import { RegisterMutation } from '../container/RegisterMutation'
import { Context } from '../Context'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { singup } = data
                activateAuth(singup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algún problema'

            return <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              title='Registrarse'
              error={errorMsg} />
          }
        }
      </RegisterMutation>
      <LoginMutation >
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
            return <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              title='Iniciar sesión'
              error={errorMsg} />
          }
        }
      </LoginMutation>
    </>
  )
}
