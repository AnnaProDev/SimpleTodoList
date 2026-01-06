import { useTaskDetails } from "../bll/useTaskDetails";
import styles from "./TaskDetails.module.css"

type Props = {
	taskId: string | null;
	boardIndex: string | null;
};

export const TaskDetails = ({ taskId, boardIndex }: Props) => {
	const { taskSelection } = useTaskDetails(taskId, boardIndex);

	return (
		<div>
			<div className={styles.task_info}>
				<div className={styles.task_info_title}>Task details</div>
				{!taskId && "Task is not selected"}
				{!taskSelection && taskId && "Loading..."}
				{taskSelection && taskId && taskSelection.id !== taskId && "Loading..."}
				{taskSelection && (
					<>
						<h2>Title: {taskSelection.attributes.title}</h2>
						<p>
							<b>Board Title: </b>
							{taskSelection.attributes.boardTitle}
						</p>
						<p>
							<b>Description: </b>
							{taskSelection.attributes.description}
						</p>
					</>
				)}
			</div>
		</div>
	);
};
