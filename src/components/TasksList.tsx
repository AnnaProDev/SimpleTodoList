import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

export const TasksList = (props) => {
	const [tasks, setTasks] = useState(null);


	function setPriorityColor(priority: number) {
		switch (priority) {
			case 0:
				return "#ffffff";
			case 1:
				return "#ffd7b5";
			case 2:
				return "#ffb38a";
			case 3:
				return "#ff9248";
			case 4:
				return "#ff6700";
			default:
				return "#ffffff";
		}
	}



	useEffect(() => {
		fetch(import.meta.env.VITE_API_URL, {
			headers: {
				"api-key": import.meta.env.VITE_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((json) => {
				setTasks(json.data);
			});
	}, []);

	if (tasks == null) {
		return (
			<>
				<h1>To-do list</h1>
				<p>Loading ...</p>
			</>
		);
	}

	return (
		<div>
			<ul className="task_list">
				{tasks.map((task) => {
					return (
						<TaskItem
							key={task.id}
							task={task}
							isSelected={task.id === props.taskId}
							onTaskSelected={props.onTaskSelected}

							taskId={props.taskId}
							boardIndex={props.boardIndex}

							onSelectTaskId={props.onSelectTaskId}
							onSelectBoardId={props.onSelectBoardId}
							setPriorityColor={setPriorityColor}
						/>
					);
				})}
			</ul>
		</div>
	);
};
