import { useEffect, useState } from "react";

export const TasksList = () => {

const [ tasks, setTasks] = useState(null)
const [ selectedTaskId, setSelectedTaskId] = useState(null);

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


  return <div>
	
	
	
			<ul className="task_list">
				{tasks.map( (task) => (
					<li className="task" 
						key={task.id} 
						style ={{ background : setPriorityColor(task.attributes.priority), borderColor: selectedTaskId === task.id ? "#6C5CE7" : "" }}
						onClick={() => {setSelectedTaskId(task.id);
											//setBoardId(task.attributes.boardId)
											}}
						>
						<input className='task_check' type="checkbox" checked={task.attributes.status} readOnly/>
						<div>
							<div className='task_title' style ={{ textDecorationLine: task.attributes.status ? "line-through": "none" }}>{task.attributes.title}</div>
							<div> 
								<b>Date of creation:</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}</div>
						</div>
					</li>
				))}
			</ul>




  </div>
}