import { useEffect, useState } from "react"

export const TaskDetails = () => {


		const [selectedTask, setSelectedTask] = useState(null)
		const selectedTaskId = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3'
		const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab'

		useEffect( () => {
			fetch("https://trelly.it-incubator.app/api/1.0/boards/" + boardId + "/tasks/" + selectedTaskId, {
				headers: {
					"api-key": import.meta.env.VITE_API_KEY,
				},
				})
				.then((res) => res.json())
				.then((json) => {
					setSelectedTask(json.data)
			})
		}, [selectedTaskId])


  return <div>
	
			<div className='task_info'>
						<div className='task_info_title'>Task details</div>
						{!selectedTaskId && "Task is not selected"}
						{!selectedTask && selectedTaskId && "Loading..."}
						{ selectedTask && selectedTaskId && selectedTask.id !== selectedTaskId && "Loading..."}
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