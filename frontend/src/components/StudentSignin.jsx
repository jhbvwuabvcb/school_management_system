import { useState } from 'react';
import { 
  StudentSignInContainer, 
  FormContainer, 
  InputField, 
  SubmitButton 
} from '../styles/StudentSignInStyles';


const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleStudentSignIn = () => {
    //looging the regiostration data
    console.log('Student SignIn ' , {email, password})
  }

  return (
    <StudentSignInContainer>
      <h2>Students Sign In</h2>
      <FormContainer>
        
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton to="/student/dashboard"onClick={handleStudentSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
