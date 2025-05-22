
export default function LoginVerify({ login, senha, navigation }) {

    if (login == "admin" && senha == "1234") {
        navigation.navigate('Home');
    } else {
        alert('Usuario ou senha Incorretos');
    }

}