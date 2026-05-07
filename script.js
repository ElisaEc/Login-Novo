//configuração Firebase

const firebaseConfig = {
  apiKey: "AIzaSyB6wk6anqX1jTNmJoz08jzJuZzM_WovtA8",
  authDomain: "login-email-866ff.firebaseapp.com",
  projectId: "login-email-866ff",
  storageBucket: "login-email-866ff.firebasestorage.app",
  messagingSenderId: "547722059943",
  appId: "1:547722059943:web:cdcce3e7e9a2c5d93b7b82",
  measurementId: "G-GQGXRPS513"
};

//inicializar  yhh

firabase.initializeApp(firebaseeConfig)
const auth = firebaseeConfig.auth();
 //função login
 function login()
 const email = document.getElementById("email").value;
 const senha= document.getElementById("senha").value;
 const msg= document.getElementById("mensagem").value;

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 auth.signInwitEmailAndPassword(email,senha)
 .then(()=>{
    msg. innerText="Login realizado com Sucesso!"
    msg.style.color="green";

 })
 .catch(console.error=>{
    msg.innerText=error.mensagem
    msg.style.color="red"
 });

 // 4. Função de Cadastro
function cadastrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");

    auth.createUserWithEmailAndPassword(email, senha)
        .then(() => {
            msg.innerText = "Conta criada com sucesso!";
            msg.style.color = "green";
        })
        .catch((error) => {
            msg.innerText = error.message;
            msg.style.color = "red";
        });
}