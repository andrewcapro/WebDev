window.addEventListener('load', () => {
	projects = JSON.parse(localStorage.getItem('projects')) || [];
    todos = JSON.parse(localStorage.getItem('todos')) || [];
	const newProjectForm = document.querySelector('#new-project-form');
    const newTodoItem = document.querySelector('#new-todo-form');

	newProjectForm.addEventListener('submit', e => {
		e.preventDefault();

		const project = {
			content: e.target.elements.pcontent.value
		}

		projects.push(project);

		localStorage.setItem('projects', JSON.stringify(projects));

		// Reset the form
		e.target.reset();

		DisplayProjects()
	})

    newTodoItem.addEventListener('submit', e => {
        e.preventDefault();
        if (currentProject != null){
            const todo = {
                content: e.target.elements.tcontent.value,
                category: currentProject
            }

            todos.push(todo);

            localStorage.setItem('todo', JSON.stringify(todos));

            e.target.reset();

            DisplayProjects();
			displayTodos();
        }
    })

	DisplayProjects()
	displayTodos()
})

function DisplayProjects () {
	const projectList = document.querySelector('.project-list');
	projectList.innerHTML = "";

	projects.forEach(project => {
		const projectItem = document.createElement('div');
		projectItem.classList.add('project-item');
		const label = document.createElement('label');
		const input = document.createElement('input');
		// const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'radio';
        input.setAttribute('name', 'projectselector');
		content.classList.add('pcontent');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

        // span.setAttribute('value', project.content);
        input.setAttribute('id', project.content)
		content.innerHTML = `<input type="text" value="${project.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		// label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		projectItem.appendChild(label);
		projectItem.appendChild(content);
		projectItem.appendChild(actions);

		projectList.appendChild(projectItem);

        currentProject = null;

        input.addEventListener('change', (e) => {
			localStorage.setItem('projects', JSON.stringify(projects));
            currentProject = input.id;
            switchProject();
            // DisplayProjects();
        })

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				project.content = e.target.value;
				localStorage.setItem('projects', JSON.stringify(projects));
				DisplayProjects()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			projects = projects.filter(t => t != project);
			localStorage.setItem('projects', JSON.stringify(projects));
			DisplayProjects()
		})

	})
}

function switchProject() {
    const todoList = document.querySelector('.todo-list');
    displayTodos();
    console.log(todos);
}

function displayTodos () {
	const todoList = document.querySelector('.todo-list');
	todoList.innerHTML = "";
	
	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const deleteButton = document.createElement('button');

		content.classList.add('tcontent');
		actions.classList.add('actions');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		deleteButton.innerHTML = 'Delete';

		actions.appendChild(deleteButton);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);
		
		todoList.appendChild(todoItem);

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != project);
			localStorage.setItem('todos', JSON.stringify(todos));
			displayTodos()
		})
	})
}