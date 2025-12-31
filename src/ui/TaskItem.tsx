import type { GlobalTaskListItemJsonApiData } from "../dal/api-fake";

type Props = {
	task: GlobalTaskListItemJsonApiData
	isSelected: boolean
	setPriorityColor:(priority: number) => string
	onSelectBoardId: (id: string) => void
	onSelectTaskId: (id: string) => void
};


function TaskItem({
	task,
	isSelected,
	setPriorityColor,
	onSelectTaskId,
	onSelectBoardId,
}: Props) {
	return (
		<li
			className="task"
			style={{
				backgroundColor: setPriorityColor(task.attributes.priority),
				borderColor: isSelected ? "#6C5CE7" : "",
			}}
			onClick={() => {
				onSelectTaskId(task.id);
				onSelectBoardId(task.attributes.boardId);
			}}
		>
			<input
				className="task_check"
				type="checkbox"
				checked={task.attributes.status === 1}
				readOnly
			/>
			<div>
				<div
					className="task_title"
					style={{
						textDecorationLine: task.attributes.status
							? "line-through"
							: "none",
					}}
				>
					{task.attributes.title}
				</div>
				<div>
					<b>Date of creation:</b>:{" "}
					{new Date(task.attributes.addedAt).toLocaleDateString()}
				</div>
			</div>
		</li>
	);
}

export default TaskItem;
