
export type ChallengeCategory = {
  name: string;
  challenges: string[];
};

export const CHALLENGES_BY_CATEGORY: Record<string, ChallengeCategory> = {
  CLASSIC: {
    name: "Kinh Điển",
    challenges: [
      "Ai vừa cầm điện thoại → uống 1 ly.",
      "Người mặc áo sáng màu uống với người mặc áo tối màu.",
      "Kể một câu chuyện cười, nếu không ai cười thì uống hết ly.",
      "Người ít nói nhất bàn phải cụng ly với tất cả mọi người.",
      "Hát 1 câu trong một bài hát bất kỳ, nếu không hát thì uống.",
      "Ai có sinh nhật gần nhất uống 2 ly.",
      "Người ngồi bên trái bạn rót cho bạn 1 ly đầy.",
      "Tự khai 1 bí mật nho nhỏ, nếu không dám thì uống.",
      "Người vừa đi vệ sinh về phải uống 1 ly.",
      "Ai đang cười toe toét → uống thêm 1 ly.",
      "Tất cả mọi người cùng hô '1, 2, 3, Dô!' và uống cạn ly.",
      "Chọn 1 người bất kỳ để 'kết nghĩa huynh đệ' và uống giao bôi.",
      "Người đeo kính uống 1 ly.",
      "Ai đi giày trắng uống 1 ly.",
      "Kể tên 5 loại bia trong 10 giây. Thất bại thì uống.",
      "Ai có điện thoại pin yếu nhất uống 1 ly.",
      "Người cao nhất và người thấp nhất cụng ly.",
      "Chơi oẳn tù tì với người bên phải, ai thua thì uống.",
      "Ai đi làm/đi học xa nhất uống 1 ly."
    ],
  },
  TRUTH_OR_DARE: {
    name: "Sự Thật hay Thử Thách",
    challenges: [
      "Sự thật: Lần cuối bạn nói dối là khi nào? Nếu không trả lời, uống 2 ly.",
      "Thử thách: Gọi điện cho người yêu cũ và nói 'Anh/em vẫn nhớ em/anh'. Nếu không dám, uống cạn ly.",
      "Sự thật: Người bạn không ưa nhất trong phòng là ai? Nếu không nói, uống với người đó 1 ly.",
      "Thử thách: Đăng một trạng thái ngớ ngẩn lên mạng xã hội. Nếu không, uống 2 ly.",
      "Sự thật: Điều điên rồ nhất bạn từng làm là gì?",
      "Thử thách: Để người bên phải vẽ lên mặt bạn. Nếu từ chối, uống 3 ly.",
      "Sự thật: Kể tên một người nổi tiếng bạn thầm thương trộm nhớ. Không trả lời thì uống.",
      "Thử thách: Cho mọi người xem bức ảnh xấu hổ nhất trong điện thoại của bạn. Không dám thì uống cạn."
    ],
  },
  ACTION: {
    name: "Hành Động",
    challenges: [
      "Đứng lên và nhảy một điệu nhảy ngớ ngẩn trong 15 giây. Nếu không, uống.",
      "Bắt chước tiếng kêu của 3 con vật khác nhau. Sai một con uống 1 ly.",
      "Giữ thăng bằng trên một chân trong 30 giây. Thất bại thì uống.",
      "Vật tay với người ngồi đối diện. Người thua uống.",
      "Không được nói 'có' hoặc 'không' trong 3 lượt tiếp theo. Vi phạm thì uống.",
      "Im lặng hoàn toàn cho đến lượt tiếp theo của bạn. Vi phạm thì uống.",
      "Gửi tin nhắn 'tớ thích cậu' cho người thứ 5 trong danh bạ gần đây. Nếu không dám, uống 2 ly.",
      "Nói 'dzô' bằng 3 giọng khác nhau. Không làm được thì uống."
    ],
  },
  JOKES: {
    name: "Pha Trò",
    challenges: [
      "Kể một câu chuyện cười. Nếu ít nhất 2 người không cười, bạn phải uống.",
      "Pha một loại đồ uống 'đặc biệt' cho người bên cạnh (họ không được từ chối).",
      "Nói một câu sến súa với người ngồi đối diện. Nếu họ không đỏ mặt, bạn uống.",
      "Đọc một câu líu lưỡi: 'Nồi đồng nấu ốc, nồi đất nấu ếch'. Sai thì uống.",
      "Phát biểu cảm nghĩ về người ngồi bên trái trong 30 giây.",
      "Bịt mắt và đoán tên 3 đồ vật trên bàn. Đoán sai 1 món, uống 1 ly.",
      "Kể một tật xấu của bản thân. Nếu mọi người đồng ý đó là tật xấu, bạn được miễn uống.",
      "Dùng khuỷu tay để nhắn tin cho một người bạn. Thất bại thì uống."
    ],
  },
};
