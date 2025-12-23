import { useState } from "react";
import { TaskDetails } from "./components/TaskDetails";
import { TasksList } from "./components/TasksList";
import './App.css'

export function MainPage() {
	const [selectTaskId, setSelectTaskId] = useState< string | null>(null);
	const [boardId, setBoardId] = useState< string | null>(null);


	function handleSelectTaskId(id:string | null) {
		setSelectTaskId(id);
	}

	function handleSelectBoardId(id: string | null) {
		setBoardId(id);
	}

	return (
		<div>
			<h1>To-do list</h1>
			<div className='tasks'>
				<TasksList
					taskId={selectTaskId}
					onSelectTaskId={handleSelectTaskId}
					onSelectBoardId={handleSelectBoardId}
				/>
				<TaskDetails taskId={selectTaskId} boardIndex={boardId} />
			</div>
		</div>
	);
}
