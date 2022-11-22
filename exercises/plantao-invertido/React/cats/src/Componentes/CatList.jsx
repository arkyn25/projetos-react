import React, { Component } from 'react'
import Cat from './Cat';

class CatList extends Component {
    render() {
        const { data, names } = this.props
        return (
            <section>
                {data.map((cat, index) => (<Cat image={cat.url} key={cat.id} name={names[index]} />))}
            </section>
        )
    }
}

export default CatList;
