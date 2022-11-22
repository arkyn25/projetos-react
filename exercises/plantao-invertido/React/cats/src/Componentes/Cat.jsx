import React, { Component } from 'react'


class Cat extends Component {
    render() {
        const { image, name } = this.props
        return (
            <div>
                <h3>{name}</h3>
                <img className="cat"src={image} alt="Foto Gato" />
            </div>
        )
    }
}
export default Cat