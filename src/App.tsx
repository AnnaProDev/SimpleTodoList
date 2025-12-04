import { useEffect, useState } from 'react';
import './App.css'


function App() {

	const [ selectedTaskId, setSelectedTaskId] = useState();
	const [ tasks, setTasks] = useState(null)

	function setPriorityColor(priority: number) {
		
		switch (priority) {
			case 0:
			return "#ffffff";
		case 1:
			return "#ffd7b5"
		case 2:
			return "#ffb38a"
		case 3:
			return "#ff9248";
			case 4:
			return "#ff6700";
		default:
			return "#ffffff";
		}
	}

	useEffect (() => {
		fetch(import.meta.env.VITE_API_URL, {
		headers: {
			"api-key": import.meta.env.VITE_API_KEY,
		},
		})
			.then((res) => res.json())
			.then((json) => {
				setTasks(json.data)
			})
	}, [])

	if (tasks == null) {
		return (
			<>	
			<h1>To-do list</h1>		
			<p>Loading ...</p>
			</>

		)
	}

	if ( tasks.length > 0) {
		  return (
    <>
		<h1>To-do list</h1>
		<button onClick={() => (setSelectedTaskId(null))}>Reset selection</button>
		<ul>
			{tasks.map( (task) => (
				<li className="task" 
					key={task.id} 
					style ={{ background : setPriorityColor(task.attributes.priority), borderColor: selectedTaskId === task.id ? "blue" : "" }}
					onClick={() => (setSelectedTaskId(task.id))}
					>
					<input className='task_check' type="checkbox" checked={task.attributes.status} />
					<div>
						<div className='task_title' style ={{ textDecorationLine: task.attributes.status ? "line-through": "none" }}>{task.attributes.title}</div>
						<div> 
							<b>Date of creation:</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}</div>
					</div>
				</li>
			))}
		</ul>
    </>
  )
	}

}

export default App
