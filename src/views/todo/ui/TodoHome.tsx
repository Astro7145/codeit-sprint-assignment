import { TodoAddContainer } from "@/src/features";
import { TodoList } from "@/src/widgets";

export default function TodoHome() {
	return (
		<div className="flex flex-col py-6 gap-y-10 px-6">
			<TodoAddContainer />
			<div className="flex flex-col tablet:flex-row gap-y-12 gap-x-6">
				<TodoList type="todo" todos={[]} />
				<TodoList
					type="done"
					todos={[
						{
							id: 1,
							tenantId: "tenant1",
							name: "Todo Item 1",
							isCompleted: false,
						},
					]}
				/>
			</div>
		</div>
	);
}
