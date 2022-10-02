import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,

} from "@chakra-ui/react";
import React, {useState} from "react";
import styles from "./subcompo.module.css";
import {useContext} from "react";
import {UserAuthContaxt} from "../../../../Context/UserAuthContextprovider";
import SignupRightButtons from "./SignupRightButtons";
import { Link,useNavigate } from "react-router-dom";



const Signupright = () => {

  const toast = useToast()
const navigate=useNavigate()

  const {SignupwithEmPa} = useContext(UserAuthContaxt);

  //error
  const [error,seterror]=useState("")

  const [inputvalues,setinputvalues]=useState({
    email:"",
    password:""
  })
  const getdata=(e)=>{
    const {value, name} = e.target;

    setinputvalues(() => {
      return {
        ...inputvalues,
        [name]: value,
      };
    });
  }

  const addformdata=async(e)=>{
    e.preventDefault()

    const {email, password} = inputvalues;
seterror("")
    try {
        await SignupwithEmPa(email, password);
      toast({
          title: 'Account created.',
          position: 'top-right',
          description: "Registration Scusses",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
      
          navigate("/Login")
     

      } catch (error) {
        console.log(error.code)
        let emassage=error.code.split("auth/")[1]
        seterror(emassage)
      }


  }

  return (
    <Box className={styles.right_box} >
      <Text color={"black"}>Bitrix24 Registration</Text>
      <hr className={styles.hrline} />
      <Text color={"black"}>Use your social account to register</Text>

     <SignupRightButtons/>

      <hr className={styles.hrline} />
      <Box className={styles.errormassage} >  {error &&  <Alert status='error'>
    <AlertIcon />
    {error}
  </Alert>}</Box>
    
      {/* ..............Form Starts.................... */}
      <FormControl  className={styles.form_controls}>

        <FormLabel>Enter email </FormLabel>
        <Input 
        size='lg'
        htmlSize={60} width='auto'
           type="email"
           name="email"
           onChange={getdata}
          //  placeholder="Enter email"
           className={styles.input_filed1}
        />

        <FormLabel>Password</FormLabel>
        <Input
        size='lg'
        htmlSize={60} width='auto'
           type="password"
           name="password"
           onChange={getdata}
          //  placeholder="Password"
           className={styles.input_filed1}
        />

<Text className={styles.text} color="gray">
      By registering you confirm that you accept the <span>Terms of Services</span> and
      <span> Privacy Policy</span> 
    </Text>
        {/* ..............Checkboxes.................. */}

        <Box className={styles.check_box}>
          <Checkbox
            className={styles.checkbox}
          
            defaultChecked
          >
            <p className={styles.check_text}>
              I want to receive product updates info and special offers
            </p>
          </Checkbox>
          <Checkbox
            className={styles.checkbox}
         
            defaultChecked
          >
            <p className={styles.check_text}>
              {" "}
              I want to receive training materials
            </p>
          </Checkbox>
        </Box>

        <hr className={styles.hrline} />

        {/* ............Register Buttons.................. */}
        <Box className={styles.btn_box}>
          <Button onClick={addformdata} type='submit'>REGISTER FOR FREE</Button>
          <Button>I Have A COUPON</Button>
        </Box>
      </FormControl>

<Text className={styles.haveaccounttext}>Already Have An Account  {<Link  to={"/Login"}> Login ? </Link>}</Text>
      {/* ..............End Form.............. */}

      <Text className={styles.bottom_text}>
      This site is protected by reCAPTCHA and the Google  <span>Privacy Policy</span> and <span>Terms of Service</span> apply
      </Text>

      <Text className={styles.needhelp}>Need Help ?</Text>
    </Box>
  );
};

export default Signupright;
