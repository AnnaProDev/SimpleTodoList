

function TaskItem({
	task,
	isSelected,
	setPriorityColor,
	onSelectTaskId,
	onSelectBoardId,
}) {
	return (
		<li
			className="task"
			style={{
				background: setPriorityColor(task.attributes.priority),
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
				checked={task.attributes.status}
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
