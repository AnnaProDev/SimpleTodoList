import clsx from "clsx";
import type { GlobalTaskListItemJsonApiData } from "../dal/api";
import styles from "./TaskItem.module.css";

type Props = {
	task: GlobalTaskListItemJsonApiData;
	isSelected: boolean;
	// setPriorityColor: (priority: number) => string;
	onSelectBoardId: (id: string) => void;
	onSelectTaskId: (id: string) => void;
};

function TaskItem({
	task,
	isSelected,
	onSelectTaskId,
	onSelectBoardId,
}: Props) {
	const priorityToClass: Record<number, string> = {
		0: styles.priority0,
		1: styles.priority1,
		2: styles.priority2,
		3: styles.priority3,
		4: styles.priority4,
	};

const taskClassName = clsx(
  styles.task,
  { [styles.selected]: isSelected },
  priorityToClass[task.attributes.priority]
);

	const titleClassName = clsx({
		[styles.task_title]: true,
		[styles.status]: task.attributes.status,
	});

	return (
		<li
			className={taskClassName}
			onClick={() => {
				onSelectTaskId(task.id);
				onSelectBoardId(task.attributes.boardId);
			}}
		>
			<input
				className={styles.task_check}
				type="checkbox"
				checked={task.attributes.status === 1}
				readOnly
			/>
			<div>
				<div className={titleClassName}>{task.attributes.title}</div>
				<div>
					<b>Date of creation:</b>:{" "}
					{new Date(task.attributes.addedAt).toLocaleDateString()}
				</div>
			</div>
		</li>
	);
}

export default TaskItem;
