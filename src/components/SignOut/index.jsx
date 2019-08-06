import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {CURRENT_USER} from 'components/User'

const SIGN_OUT = gql`
    mutation SIGN_OUT{
        signOut {
            message
        }
    }
`

const SignOut = () => {
    return (
        <Mutation mutation={SIGN_OUT} refetchQueries={[{
            query: CURRENT_USER
        }]}>
            {(signOut) => <button onClick={signOut}>Sign out</button>}
        </Mutation>

    )
}


export default SignOut