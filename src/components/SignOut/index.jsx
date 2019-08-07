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

const SignOut = ({Button}) => {
    return (
        <Mutation mutation={SIGN_OUT} refetchQueries={[{
            query: CURRENT_USER
        }]}>
            {(signOut) => <Button onClick={signOut}>Sign out</Button>}
        </Mutation>

    )
}


export default SignOut