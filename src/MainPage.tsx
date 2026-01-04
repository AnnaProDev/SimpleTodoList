import { TaskDetails } from "./ui/TaskDetails";
import { TasksList } from "./ui/TasksList";
import './index.css'
import { useTaskSelection } from "./bll/useTaskSelection";

export function MainPage() {
const { selectedTaskId, setSelectedTaskId, boardId, setBoardId } = useTaskSelection()


	function handleSelectTaskId(id:string | null) {
		setSelectedTaskId(id);
	}

	function handleSelectBoardId(id: string | null) {
		setBoardId(id);
	}

	return (
		<div>
			<h1>To-do list</h1>
			
			<div className='tasks'>
				<TasksList
					taskId={selectedTaskId}
					onSelectTaskId={handleSelectTaskId}
					onSelectBoardId={handleSelectBoardId}
				/>
				<TaskDetails taskId={selectedTaskId} boardIndex={boardId} />
			</div>
		</div>
	);
}
