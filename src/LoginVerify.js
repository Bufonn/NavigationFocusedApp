import AsyncStorage from "@react-native-async-storage/async-storage";

const saveLogin = async (loginArray) => {
    try{
        await AsyncStorage.setItem('login:key', JSON.stringify(loginArray));
    }catch (error) {
        console.log("Erro ao salvar o Login", error);
    }

}

const loginVerification = async () =>{
    try {
        const savedLogin = await AsyncStorage.getItem('login:key');

        if(savedLogin != null){
            try {
                navigation.navigate('Home');
            } catch (error) {
                console.log("Ocorreu um Erro na Navegação", error);
            }
        }else {
            console.log("Não há Login Salvo")
        }
    } catch (error) {
        console.log("Ocorreu um erro ao Verificar", error);
    }
}

export default function LoginVerify({ login, senha, navigation }) {

    if (login == "admin" && senha == "1234") {
        navigation.navigate('Home');
        loginArray[0] = {login};
        loginArray[1] = {senha};
    } else {
        alert('Usuario ou senha Incorretos');
    }

}
