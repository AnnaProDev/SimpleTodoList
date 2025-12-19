import { useState } from "react";
import { TaskDetails } from "./components/TaskDetails";
import { TasksList } from "./components/TasksList";
import './App.css'

export function MainPage() {
	const [selectTaskId, setSelectTaskId] = useState(null);
	const [boardId, setBoardId] = useState(null);


	function handleSelectTaskId(id) {
		setSelectTaskId(id);
	}

	function handleSelectBoardId(board) {
		setBoardId(board);
	}

	return (
		<div>
			<h1>To-do list</h1>
			<div className='tasks'>
				<TasksList
					taskId={selectTaskId}
					boardIndex={boardId}
					onSelectTaskId={handleSelectTaskId}
					onSelectBoardId={handleSelectBoardId}
				/>
				<TaskDetails taskId={selectTaskId} boardIndex={boardId} />
			</div>
		</div>
	);
}
