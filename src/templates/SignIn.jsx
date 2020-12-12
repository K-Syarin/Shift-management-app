import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import { TextInput, PrimaryButton } from '../components/UIkit/index'
import {signIn} from '../reducks/users/operations';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, [setEmail])
  const inputPassword = useCallback((event) => {
    setPassword(event.target.value);
  }, [setPassword]) 

  return (
    <div className="main-container">
      <h2>サインイン</h2>
      <TextInput label={"email"} type={"email"} fullWidth={true} onChange={inputEmail} value={email} />
      <TextInput label={"パスワード"} type={"password"} fullWidth={true} onChange={inputPassword} value={password} />
      <PrimaryButton label={"サインイン"} width={"70%"} fullWidth={true} onClick={() => dispatch(signIn(email, password))} />
    </div>
  )
}

export default SignIn
