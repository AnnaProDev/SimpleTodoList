import { useEffect, useState } from "react"
import { getTask, type TaskDetailsDatum } from "../dal/api-fake"

type Props = {
	taskId: string | null
	boardIndex: string | null
}


export const TaskDetails = ({taskId, boardIndex}: Props) => {


		const [selectedTask, setSelectedTask] = useState<TaskDetailsDatum | null>(null)


		useEffect( () => {
				getTask(taskId, boardIndex).then((json) => {
					setSelectedTask(json.data)
			})
		}, [taskId, boardIndex])


  return <div>
	
			<div className='task_info'>
						<div className='task_info_title'>Task details</div>
						{!taskId && "Task is not selected"}
						{!selectedTask && taskId && "Loading..."}
						{ selectedTask && taskId && selectedTask.id !== taskId && "Loading..."}
						{ selectedTask &&
							<>
								<h2>Title: {selectedTask.attributes.title}</h2>
								<p><b>Board Title: </b>{selectedTask.attributes.boardTitle}</p>
								<p><b>Description: </b>{selectedTask.attributes.description}</p>
							</>
						}
			</div>
	
	
	</div>
}