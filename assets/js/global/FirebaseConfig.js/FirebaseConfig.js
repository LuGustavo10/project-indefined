
// const firebaseConfig = {
//     apiKey: "AIzaSyBok9MxnzvBXfEgHhsutXpqSQToTl2R3Ek",
//     authDomain: "pratica-882a1.firebaseapp.com",
//     databaseURL: "https://pratica-882a1-default-rtdb.firebaseio.com",
//     projectId: "pratica-882a1",
//     storageBucket: "pratica-882a1.appspot.com",
//     messagingSenderId: "134991319979",
//     appId: "1:134991319979:web:b6726c8690fb5190e1f8ee"
// };

// // Inicialize o Firebase
// firebase.initializeApp(firebaseConfig);

// // Função para lidar com o envio do formulário de registro
// document.getElementById("form-register").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evitar que o formulário seja enviado normalmente

//     var email = document.getElementById("validationEmail").value;
//     var password = document.getElementById("validationPassword").value;

//     // Registrar usuário com o Firebase
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(function (userCredential) {
//         // Registro bem-sucedido, redirecionar ou fazer outra ação desejada
//         console.log("Usuário registrado com sucesso!");

//         // Redirecione o usuário para outra página
//         window.location.href = "../catalog/catalog.html";
//     })
//         .catch(function (error) {
//             // Lidar com erros de registro
//             var errorMessage = error.message;
//             console.error(errorMessage + " Error ao fazer o resgistro");
//         });

// });

// export default firebaseConfig;// const firebaseConfig = {
//     apiKey: "AIzaSyBok9MxnzvBXfEgHhsutXpqSQToTl2R3Ek",
//     authDomain: "pratica-882a1.firebaseapp.com",
//     databaseURL: "https://pratica-882a1-default-rtdb.firebaseio.com",
//     projectId: "pratica-882a1",
//     storageBucket: "pratica-882a1.appspot.com",
//     messagingSenderId: "134991319979",
//     appId: "1:134991319979:web:b6726c8690fb5190e1f8ee"
//   };
  
//   // Inicialize o Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // Função para lidar com o envio do formulário de login
//   document.getElementById("form-login").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evitar que o formulário seja enviado normalmente
  
//     var email = document.getElementById("validati-Email").value;
//     var password = document.getElementById("validation-Password").value;
  
//     // Fazer login com o Firebase
//     firebase.auth().signInWithEmailAndPassword(email, password).then(function (userCredential) {
//       // Login bem-sucedido, redirecionar ou fazer outra ação desejada
//       console.log("Usuário logado com sucesso!");
  
//       // Redirecione o usuário para outra página
//       document.location.href = "catalog.html";
//     })
//     .catch(function (error) {
//       // Lidar com erros de login
//       var errorMessage = error.message;
//       console.error(errorMessage + "Error ao fazer login");
//     });
//   });
  
//   // Função para lidar com o envio do formulário de registro
//   document.getElementById("form-register").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evitar que o formulário seja enviado normalmente
  
//     var email = document.getElementById("validationEmail").value;
//     var password = document.getElementById("validationPassword").value;
  
//     // Registrar usuário com o Firebase
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(function (userCredential) {
//       // Registro bem-sucedido, redirecionar ou fazer outra ação desejada
//       console.log("Usuário registrado com sucesso!");
  
//       // Redirecione o usuário para outra página
//       document.location.href = "catalog.html";
//     })
//     .catch(function (error) {
//       // Lidar com erros de registro
//       var errorMessage = error.message;
//       console.error(errorMessage + "Error ao fazer o resgistro");
//     });
//   });
  