import React, { useState } from "react";
import "./App.css";

function App() {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const NewTodoSubmit = (event) => {
		event.preventDefault();

		if (newTodo.length === 0) {
			return;
		}

		const todoItem = {
			text: newTodo,
			complete: false,
		};

		setTodos([...todos, todoItem]);
		setNewTodo("");
	};

	const TodoDelete = (delIdx) => {
		const filteredTodos = todos.filter((todo, i) => {
			return i !== delIdx;
		});

		setTodos(filteredTodos);
	};

	const ToggleTodoComplete = (idx) => {
		const updatedTodos = todos.map((todo, i) => {
			if (idx === i) {
				todo.complete = !todo.complete;
			}

			return todo;
		});

		setTodos(updatedTodos);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<form
				onSubmit={(event) => {
					NewTodoSubmit(event);
				}}
			>
				<input
					onChange={(event) => {
						setNewTodo(event.target.value);
					}}
					type="text"
					value={newTodo}
				/>
				<div>
					<button>Add</button>
				</div>
			</form>

			{todos.map((todo, i) => {
				return (
					<div key={i}>
						<span>{todo.text}</span>
						<input
							onChange={(event) => {
								ToggleTodoComplete(i);
							}}
							checked={todo.complete}
							type="checkbox"
						/>
						<button
							onClick={(event) => {
								TodoDelete(i);
							}}
							style={{ marginLeft: "5px" }}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default App;
