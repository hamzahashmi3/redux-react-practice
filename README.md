Step 1:
install react app using
npx create-react-app .

Step 2:
install redux libraries using
npm i redux react-redux @reduxjs/toolkit

Step 3:
in Index.js file
import these redux libraries...

    import { configureStore } from '@reduxjs/toolkit';
    import { Provider } from 'react-redux';

and create a store.

    const store = configureStore({
    reducer:{}
    })

and place a <Provider/> component as a parent component on <App /> component in index.js file

        <Provider store={store}>
            <App />
        </Provider>

step 4:

create a new component user.js in feature folder
in that import a @reduxjs/toolkit feature {createSlices}, and create a userSlice component with it,

        import { createSlice } from '@reduxjs/toolkit';


        const userSlice = createSlice({
            name: "user",
            initialState:{"value":{"name":"","age":0,"email":""}},
            reducer:{
                login: (state, action)=>{
                    state.value = action.payload;
                }
            }

        })

        export default userSlice;

Step 5:
import that userSlice in index.js file and add it in reducer object in global store reducer

    import userReducer from './features/user';

    const store = configureStore({
        reducer:{
            user: userReducer
        }
    })

step 6:
in Profile.js component import a { useSelector } hook from 'react-redux and create a state from where we can get the data when the state changes.
and put the changed value on its places.

    import { useSelector } from 'react-redux';

    const user = useSelector(state => state.user.value)

     <div>
        <h1>User Profile</h1>
        <h3>Name : {user.name}</h3>
        <h3>Age : {user.age}</h3>
        <h3>Email : {user.email}</h3>
    </div>

Step 7:
create an action for login button in user.js and export it.

    export const { login, logout } = userSlice.actions;

Step 8:
in Login Component import a {useDispatch} feature from 'react-redux' and create a dispatch function through it,

    import {useDispatch } from 'react-redux';

    const dispatch = useDispatch();

after that import the action feature from user.js file and dispatch that on login button using onClick()

    import { login } from '../features/user'

    <button

        onClick={()=>{
            dispatch(login({name:"hamzah",age:25,email:"hamzahashmi.office@gmail.com"}))}}> Login

    </button>
