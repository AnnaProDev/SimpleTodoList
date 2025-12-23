import { useEffect, useState } from "react";
import TaskItem, { type GlobalTaskListItemJsonApiData } from "./TaskItem";


type Props = {
	taskId: string | null
	onSelectTaskId: (id:string | null) => void
	onSelectBoardId: (id: string | null) => void
}

export const TasksList = ({taskId, onSelectTaskId, onSelectBoardId}: Props) => {
	const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);

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

	if (tasks === null) {
		return (
			<>
				<h1>To-do list</h1>
				<p>Loading ...</p>
			</>
		);
	}

	return (
		<div>
			<div className="task_list">
				<button
					onClick={() => {
						onSelectTaskId(null);
						onSelectBoardId(null)
					}}
				>
					Reset selection
				</button>
				{tasks.map((task) => {
					return (
						<TaskItem
							key={task.id}
							task={task}
							isSelected={task.id === taskId}
							onSelectTaskId={onSelectTaskId}
							onSelectBoardId={onSelectBoardId}
							setPriorityColor={setPriorityColor}
						/>
					);
				})}
			</div>
		</div>
	);
};
