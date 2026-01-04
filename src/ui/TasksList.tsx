import TaskItem from "./TaskItem";
import { useTasks } from "../bll/useTasks";

type Props = {
	taskId: string | null;
	onSelectTaskId: (id: string | null) => void;
	onSelectBoardId: (id: string | null) => void;
};

export const TasksList = ({
	taskId,
	onSelectTaskId,
	onSelectBoardId,
}: Props) => {
	const { tasks } = useTasks();

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
			<button
				onClick={() => {
					onSelectTaskId(null);
					onSelectBoardId(null);
				}}
			>
				Reset selection
			</button>
			<div className="task_list">
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
