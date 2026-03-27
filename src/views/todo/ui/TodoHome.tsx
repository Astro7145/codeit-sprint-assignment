import { TodoAddContainer } from "@/src/features";
import { TodoList } from "@/src/widgets";

export default function TodoHome() {
	return (
		<div className="flex flex-col py-6 gap-y-10 px-6">
			<TodoAddContainer />
			<div className="flex flex-col tablet:flex-row gap-y-12 gap-x-6">
				<TodoList isCompleted={false} />
				<TodoList isCompleted={true} />
			</div>
		</div>
	);
}
