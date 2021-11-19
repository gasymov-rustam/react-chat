    ---------------------------------Index-----------------------------------------------------
    Данные аувторизации из гугл аккаунта:
                                        firebase.initializeApp({
                                        apiKey: "AIzaSyAkKczJIAfVtoqZivi5AhzySS2CAuGQO7o",
                                        authDomain: "my-app-a6203.firebaseapp.com",
                                        projectId: "my-app-a6203",
                                        storageBucket: "my-app-a6203.appspot.com",
                                        messagingSenderId: "807454670876",
                                        appId: "1:807454670876:web:eb253eec447f82d7971fd9",
                                          });
      
    const auth = firebase.auth(); // создаем с помощью данных из гугл auth(пользователя) и передаем в контекст данные о пользователе
    const firestore = firebase.firestore(); // создаем базу данных на основе данных из гугл и передаем в контекст
    
    export const Context = createContext(null); // создаем и экспортируем контекст
    
    Оборачиваем приложение в контекст и передаем данные в value, чтоб в компонентах их вытаскивать потом (firebase получем из данных из гугл, auth и firestore были занесены ранее в переменные)
    <Context.Provider value={{ firebase, auth, firestore }}>
            <App />
    </Context.Provider>
    
    
    ---------------------------------Компонент Login-------------------------------------------
    
    const { auth } = useContext(Context); // данные с контекста в компоненте
    const [user, loading, error] = useAuthState(auth); // данные с аутентификации вытаскиваем, хук для аутентификации

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider(); // создаем экземпляр класса с помощью конструктора и заносим в отдельную переменную
        const { user } = await auth.signInWithPopup(provider); // аутентификация с помощью отдельного окна гугл (если пользователь авторизован то приходят данные с аккаунта, если нет то приходит null)

    ---------------------------------Компонент NavBar-------------------------------------------

    const { auth } = useContext(Context); // данные с контекста в компоненте
    const [user] = useAuthState(auth);


    ---------------------------------Компонент Chat---------------------------------------------
    Создаем асинхронную функцию, которая добавляет в базу данных новую коллекцию под названием messages, внутрь нее передаем объект с различными данными из user и время которое было полчено также c сервера 
    const sendMessage = async () => {
        firestore.collection("messages").add({
            id: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };


    Хук firebase для получения сообщения возвращает кортедж из сообщения и лоудера, передаем в хук внутрь данные из базы данных которая находится внутри самого гугл firebase
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt") // функция orderBy также поставляется вместе с гуглом и осуществляет сортировку 
    );



    Когда все готово нужно также создать базу данных на ссамом сайте firebase в гугле!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
