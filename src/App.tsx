import { useState } from 'react';
import './App.css'

const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "3 сентября",
    priority: 3,
  },
]



function App() {

	const [ selectedTaskId, setSelectedTaskId] = useState();

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
					style ={{ background : setPriorityColor(task.priority), borderColor: selectedTaskId === task.id ? "blue" : "" }}
					onClick={() => (setSelectedTaskId(task.id))}
					>
					<input className='task_check' type="checkbox" checked={task.isDone} />
					<div>
						<div className='task_title' style ={{ textDecorationLine: task.isDone ? "line-through": "none" }}>{task.title}</div>
						<div>Date of creation: {task.addedAt}</div>
					</div>
				</li>
			))}
		</ul>
    </>
  )
	}

}

export default App
