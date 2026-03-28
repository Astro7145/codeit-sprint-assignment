export interface TodoItem {
	id: number;
	tenantId: string;
	name: string;
	memo?: string;
	imageUrl?: string;
	isCompleted: boolean;
}

export interface TodoRequest {
	name?: string;
	memo?: string;
	imageUrl?: string;
	isCompleted?: boolean;
}

export interface ImageResponse {
	url: string;
}
