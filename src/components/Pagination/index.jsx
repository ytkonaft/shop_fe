import {withRouter} from 'next/router'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Head from 'next/head'

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        productsConnection{
            aggregate {
                count
            }
        }
    }
`

const Pagination = ({router}) => {
    const currentPage = router.query.page || 1
    console.log(currentPage)
    return (
        <div>
            <Query query={PAGINATION_QUERY} >
                {({data, loading, error}) => {
                    if (loading) return 'loading'
                    if (error) return 'error'
                    console.log(data)
                    return (
                        <div>
                          <Head>
                              <title>olololo | {currentPage}</title>
                           </Head>
                           <strong>Page: {currentPage}</strong>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}
 
export default withRouter(Pagination) 