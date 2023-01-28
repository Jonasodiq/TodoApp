const todoApp = () => {
    // 1. Get Elements from DOM (index.html)
    const todoForm = document.querySelector('.todo__form')
    const todoInput = document.querySelector('.todo__input')
    const todoList = document.querySelector('.todo__list')

    const addTodo = (event) => {
        // Prevent Default behaviour of the form submitting and refreshing our browse
        // Предотвратить поведение по умолчанию при отправке формы и обновлении нашего браузера
        event.preventDefault()

        // Create variable with the value of input field
        // Создаем переменную со значением поля ввода
        const inputValue = todoInput.value

        // If imputValue is empty or doesn't contain anytime, do not continue!
        // Если значение imputValue пусто или не содержит никакого времени, не продолжай!
        if (!inputValue) return

        // Create ListItem - Создать элемент списка
        const ListItemElement = document.createElement('li') // Create Li 
        ListItemElement.classList.add('todo__item')          // Add class to Li
        ListItemElement.textContent = inputValue             // Add input value to Li text
        // listItemElement.innerHTML = '<span class="todo__text">' + inputValue + '</span>'
        ListItemElement.addEventListener('click', completeTodo)

        // Create removeButton - Создать кнопку удаления
        const removeButton = document.createElement('button')
        removeButton.classList.add('todo__remove', 'material-symbols-outlined')
        removeButton.innerHTML = '<span class="material-symbols-outlined">remove</span>'
        removeButton.addEventListener('click', removeTodo)

        // Append created Li to list - Добавить создат Li в список List
        todoList.append(ListItemElement)

        // Append created button to listItem - Добавить создат button в список ListItem
        ListItemElement.append(removeButton) //ListItemElement
        // todoList.append(removeButton) // todoList

        // Reset input value - Сбросить входное значение
        todoInput.value = ''
    }

    // Function for removing Todo - Функция удаления Todo
    const removeTodo = (event) => {

        const todoToBeRemoved = event.currentTarget.parentNode // hämta info

        todoToBeRemoved.remove() // ta bort button

    }

    // Function to complete a Todo
    const completeTodo = (event) => {

        const todoToBeToggledCompeleted = event.target

        todoToBeToggledCompeleted.classList.toggle('todo__item--completed')
    }


    todoForm.addEventListener('submit', addTodo)
}

todoApp()



//console.log()