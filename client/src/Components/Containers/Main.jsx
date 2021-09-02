import React from 'react'
import Header from './Nav'
import Home from '../Screens/Home'
import CreateStudent from '../Screens/CreateStudent'
import EditStudent from '../Screens/EditStudent'

import { BrowserRouter as Router , Route } from 'react-router-dom'


const Students = ({setIslogin}) => {
    return (
      <Router>
          <div className="notes-page" >
             <Header setIslogin= {setIslogin} />
             <section>
                 <Route  path="/" component={Home} exact />
                
                 <Route  path="/create" component={CreateStudent} exact />
                 <Route  path="/edit/:id" component={EditStudent} exact />
                 
             </section>
            
          </div>
      </Router>
    )
}

export default Students
