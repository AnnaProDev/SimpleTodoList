import { useEffect, useState } from 'react';
import './App.css'


function App() {

	const [ selectedTaskId, setSelectedTaskId] = useState(null);
	const [selectedTask, setSelectedTask] = useState(null)
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
		<button onClick={() => {setSelectedTaskId(null);					
		}}>Reset selection</button>

		<div className='tasks'>
		<ul className="task_list">
			{tasks.map( (task) => (
				<li className="task" 
					key={task.id} 
					style ={{ background : setPriorityColor(task.attributes.priority), borderColor: selectedTaskId === task.id ? "#6C5CE7" : "" }}
					onClick={() => {setSelectedTaskId(task.id); 
										setSelectedTask(null)
										 fetch("https://trelly.it-incubator.app/api/1.0/boards/" + task.attributes.boardId + "/tasks/" + task.id, {
											headers: {
												"api-key": import.meta.env.VITE_API_KEY,
											},
											})
											.then((res) => res.json())
											.then((json) => {
												setSelectedTask(json.data)
										 })

					}}
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

			{ selectedTaskId
			?		<div className='task_info'>
						<div className='task_info_title'>Task details</div>

						{ selectedTask 
						? <>	<p className='task_title'>{ selectedTaskId? selectedTask.attributes.title : "Task is not selected"}</p>
								<p><b>Board Title: </b>{selectedTask.attributes.boardTitle}</p>
								<p><b>Description: </b>{selectedTask.attributes.description}</p>
							</>
						: <p>"Loading..."</p>  
						}
					</div>
			: ""
			}
			</div>

    </>
  )
	}

}

export default App
