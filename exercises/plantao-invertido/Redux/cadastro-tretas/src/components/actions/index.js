
 export function addTretas(nome, preferencia) {
    return { type: 'ADD_TRETA', nome, preferencia }
}

export function deleteTreta (index){
    return { type: 'DEL_TRETA', payload: index }
}

export function editarTreta(index) {
    return { 
      type: 'EDITAR_TRETA',
      payload: {
        index
      }
    }
}