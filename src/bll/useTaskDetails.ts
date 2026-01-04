import { useEffect, useState } from "react";
import { getTask, type TaskDetailsDatum } from "../dal/api";

export const useTaskDetails = (
	taskId: string | null,
	boardIndex: string | null
) => {
	const [taskSelection, setTaskSelection] = useState<TaskDetailsDatum | null>();

	useEffect(() => {
		getTask(taskId, boardIndex).then((json) => {
			setTaskSelection(json.data);
		});
	}, [taskId, boardIndex]);
	return { taskSelection };
};
