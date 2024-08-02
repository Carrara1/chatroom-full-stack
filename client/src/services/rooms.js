import api from "./api";

export const AddRoom = async (title, description, image) => {
	return await api.post("rooms", { title, description, image });
};

export const GetRooms = async () => {
	return await api.get("rooms");
};

export const GetRoomTitle = async (roomId) => {
	return await api.get(`rooms/${roomId}`);
};

export const GetRoomMessages = async (roomId) => {
	return await api.get(`rooms/${roomId}/messages`);
};
