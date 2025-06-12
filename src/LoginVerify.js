import AsyncStorage from "@react-native-async-storage/async-storage";

//Salva o login no AsyncStorage
const saveLogin = async (login, senha) => {
    try {
        await AsyncStorage.setItem('login:key', JSON.stringify({ login, senha }));
    } catch (error) {
        console.log("Erro ao salvar o Login", error);
    }
};

//Verifica se já tem login salvo
const loginVerification = async (navigation) => {
    try {
        const savedLogin = await AsyncStorage.getItem('login:key');
        if (savedLogin !== "") {
            navigation.navigate('Home');
        }
    } catch (error) {
        console.log("Erro ao verificar o login", error);
    }
};

export { saveLogin, loginVerification };
