/*eslint no-useless-escape: 0*/

import {
    observable,
    action,
    toJS,
  } from 'mobx'
  
  
  const rest_url = "https://streakr.alwx.me/users"

  
  class TrackingStore {
  
    //tracking state of request
    @observable token = ""
    @observable userData = ""
    @observable  userState = "login"
    @observable  campaigns = []
   
//Login
@action
    async loginUser(email, password) {
      try {
        await
        fetch(rest_url   + '/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"username": email, "password": password})
        }).then(response =>response.json())
        .then(token => {this.getData(token.token)})
      } catch (error) {
        console.log(error)
      }
    }

    @action
    async getData(token) {
    const fullDataResponse = await fetch(rest_url   + '/me', {
                method: 'get',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
                }
            }
        )
        const visitorHistory = await fullDataResponse.json()
        this.userData = toJS(visitorHistory.user)
        this.campaigns = toJS(visitorHistory.user.campaigns)
      
    }
}


  const singleton = new TrackingStore()
  export default singleton
    