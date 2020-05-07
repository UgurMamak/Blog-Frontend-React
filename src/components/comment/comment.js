import React, { Component } from 'react'
//components
import ListComment from './list-comment/ListComment'
import AddComment from './add-comment/AddComment'

export default class comment extends Component {
    render() {
        return (
            <div>
                <ListComment/>
                <AddComment/>
            </div>
        )
    }
}
