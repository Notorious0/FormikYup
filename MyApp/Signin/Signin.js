import { Formik } from "formik";
import { TouchableOpacity, TextInput,View,Text,StyleSheet} from "react-native";
import * as Yup from "yup";

export const Signin = () => (
<Formik
  validationSchema={validation}
  onSubmit={(values, { resetForm }) => {
    console.log(values);
    resetForm();
  }}
  initialValues={{
    email: "",
    password: "",
  }}
>

    {({handleSubmit,handleChange,handleBlur,touched,values,errors}) => (
      <>
        <TextInput value={values.email} onTouchStart={handleBlur("email")} onChangeText={handleChange("email")} style={styles.input} inputMode="email" placeholder="Email" />
        {touched.email && errors.email && <Error message={errors.email}/> }
        <TextInput value={values.password} onTouchStart={handleBlur("password")} onChangeText={handleChange("password")}  style={styles.input} secureTextEntry placeholder="Şifre" />
        {touched.password && errors.password && <Error message={errors.password}/> }
        <TouchableOpacity onPress={()=>handleSubmit()}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Gönder</Text>
        </View>
        </TouchableOpacity>

      </>
    )}
  </Formik>
);
const Error = ({message})=><Text style={styles.error}>
 {message}
</Text>

const validation =Yup.object().shape({
    email:Yup.string().email("Email formatı uygun girilmedi").required("Email alanı zorunludur"),
    password:Yup.string().min(6,"Şifre minimum 6 karakter olmalı").required("Şifre alanı zorunludur!"),
})

const styles = StyleSheet.create({
    error:{
     fontWeight:"bold",
     color:"red",
     fontSize:14,
    },
    btn: {
        marginTop:5,
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"purple",
        borderRadius:25,
    },
    btnText:{
     fontSize:18,
     color:"white",
     fontWeight:"bold",
    },
    input:{
        margin:4,
        width:300,
        height:50,
        borderRadius:20,
        backgroundColor:"#9ac6c5",
        paddingLeft:25,
    },
  });
