import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className='TodosLoading-container'>
      <span className='LoadingTodo-completeIcon'></span>
      <p className='LoadingTodo-text'></p>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export { TodosLoading }
