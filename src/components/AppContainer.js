import React, { Component } from 'react'
import { CardList } from './card-list/CardList.component'
import { SearchBox } from './search-box/Search-box.component'

class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }
    
    render() {
        const {monsters, searchField} = this.state
        const filteredMonsters = monsters.filter((monster) => monster.name
                                .toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div>
                <div>
                    <h1>Monster Rolodex</h1>
                    <SearchBox 
                        placeholder='Search Monster'
                        handleChange={e => this.setState({searchField: e.target.value})}
                    />
                    <CardList monsters={filteredMonsters}/>
                </div>              
            </div>
        )
    }
}

export default AppContainer
