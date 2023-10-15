import { io } from "socket.io-client";
// 연결하고 싶은 백엔드 주소 입력
const socket = io("http://localhost:5001");
export default socket;
