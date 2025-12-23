import { useEffect, useState } from "react"

type Props = {
	taskId: string | null
	boardIndex: string | null
}

type TaskDetailsDto = {
	boardTitle: string
	title: string
	description: string | null
}

type TaskDetailsDatum = {
	id: string
	attributes: TaskDetailsDto
}

export const TaskDetails = ({taskId, boardIndex}: Props) => {


		const [selectedTask, setSelectedTask] = useState<TaskDetailsDatum | null>(null)


		useEffect( () => {
			fetch("https://trelly.it-incubator.app/api/1.0/boards/" + boardIndex + "/tasks/" + taskId, {
				headers: {
					"api-key": import.meta.env.VITE_API_KEY,
				},
				})
				.then((res) => res.json())
				.then((json) => {
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