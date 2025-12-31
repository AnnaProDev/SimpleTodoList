export type TaskDetailsDto = {
	boardTitle: string;
	title: string;
	description: string | null;
};

export type TaskDetailsDatum = {
	id: string;
	attributes: TaskDetailsDto;
};

export type GetTaskOutput = {
	data: TaskDetailsDatum;
};

export const getTask = (taskId: string | null, boardIndex: string | null) => {
	const promise: Promise<GetTaskOutput> = fetch(
		"https://trelly.it-incubator.app/api/1.0/boards/" +
			boardIndex +
			"/tasks/" +
			taskId,
		{
			headers: {
				"api-key": import.meta.env.VITE_API_KEY,
			},
		}
	).then((res) => res.json());

	return promise;
};


type GlobalTaskListItemDto = {
	priority: number
	boardId: string
	status: number
	title: string
	addedAt: string
}

export type GlobalTaskListItemJsonApiData = {
	id: string
	attributes: GlobalTaskListItemDto
}

export type GlobalTaskListResponse = {
	data: Array <GlobalTaskListItemJsonApiData>
}

export const getTasks = () => {
	const promise: Promise<GlobalTaskListResponse> = fetch(import.meta.env.VITE_API_URL, {
		headers: {
			"api-key": import.meta.env.VITE_API_KEY,
		},
	}).then((res) => res.json());

	return promise;
};
