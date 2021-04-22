import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignInSignUppage from './pages/SignInSignUppage/SignInSignUppage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null; 

  componentDidMount() {
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef =  await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      this.setState({ currentUser: userAuth })
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signin' component={SignInSignUppage} />
        </Switch>
      </div>
    )
  }
  
}

export default App;
