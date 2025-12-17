function TaskItem(props) {
	return (
		<li
			className="task"
			style={{
				background: props.setPriorityColor(props.task.attributes.priority),
				borderColor: props.isSelected ? "#6C5CE7" : "",
			}}
			onClick={() => {
				props.onSelectTaskId(props.task.id);
				props.onSelectBoardId(props.task.attributes.boardId);
			}}
		>
			<input
				className="task_check"
				type="checkbox"
				checked={props.task.attributes.status}
				readOnly
			/>
			<div>
				<div
					className="task_title"
					style={{
						textDecorationLine: props.task.attributes.status
							? "line-through"
							: "none",
					}}
				>
					{props.task.attributes.title}
				</div>
				<div>
					<b>Date of creation:</b>:{" "}
					{new Date(props.task.attributes.addedAt).toLocaleDateString()}
				</div>
			</div>
		</li>
	);
}

export default TaskItem;
