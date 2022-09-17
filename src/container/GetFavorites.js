import { gql } from 'apollo-boost'
import React from 'react'
import { Query } from 'react-apollo'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  console.log({ 'GetFavortite': 'renderProp', 'data': data })
  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error!</p>
  }
  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    { renderProp }
  </Query>
)
