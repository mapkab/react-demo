const actions={
	addTodo(text){
		return{
			type:'ADD_TODO',
			text:text
		}
	}
	
}

store.dispatch(addTodo('Giorgio Armani'));

export default actions;