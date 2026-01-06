import TaskItem from "./TaskItem";
import { useTasks } from "../bll/useTasks";
import styles from "./TaskList.module.css"

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
			<div className={styles.task_list}>
				{tasks.map((task) => {
					return (
						<TaskItem
							key={task.id}
							task={task}
							isSelected={task.id === taskId}
							onSelectTaskId={onSelectTaskId}
							onSelectBoardId={onSelectBoardId}
						/>
					);
				})}
			</div>
		</div>
	);
};
