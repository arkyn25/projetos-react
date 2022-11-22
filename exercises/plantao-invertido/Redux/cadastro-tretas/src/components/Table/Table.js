import React, { Component } from 'react';
import './Table.css';
import { connect } from 'react-redux';


class Table extends Component {
  constructor(props, context) {
    super(props, context);
    this.state ={ isEditing: false};
    this.toggleEdit = this.toggleEdit.bind(this);
  }  

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }
  render() {
    
    const { tretas, deletarTreta } = this.props
    return (

      <div>
        {tretas.map((treta, index) => (
          <>
            <p id="edit" key={`treta-${index}`}>
              A pessoinha {treta.nome} prefere {treta.preferencia},
            {treta.preferencia === 'bolacha'
                ? 'que é o correto, parabéns!'
                : 'que é errado, por favor reveja seus conceitos.'}
            </p>
            <button type="button" onClick={ () => {deletarTreta(index)} }>Deletar Treta</button>
            <button onClick={this.toggleEdit}>Editar Treta</button>
          </>
        ))}
      </div>
      

    );
  }
}

const mapStateToProps = (state) => ({
  tretas: state.reducer.tretas,
});

const mapDispatchToProps = (dispatch) => ({
  deletarTreta: (index) => dispatch({ type: 'DEL_TRETA', index }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
