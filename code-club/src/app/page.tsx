import Image from "next/image";

export default function Home() {
  // 신입 기수 커리큘럼 데이터
  const newMemberCurriculum = [
    {
      title: "5분 스피치",
      period: "2025년 3월 11일 ~ 2025년 4월 8일",
      tags: ["개인 활동", "발표"],
      emoji: "🎤",
      image: "https://file.notion.so/f/f/f6139788-f8f8-4586-a8b5-5a71317a4704/590bab30-891d-4382-b023-d36233bb3e6e/1742901454127-9.jpg?table=block&id=1c216d49-8843-807b-9dac-ff51efa2792b&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&expirationTimestamp=1751932800000&signature=UsBdfBXFIbT2ofa3442Dnoa_d478FU7K9ScjfEcVqPE&downloadName=1742901454127-9.jpg",
      description: "자신의 관심사나 경험을 5분 동안 발표하며 발표력과 자신감을 키우는 시간입니다.",
    },
    {
      title: "Python 스터디",
      period: "2025년 3월 11일 ~ 2025년 4월 8일",
      tags: ["팀별 활동", "스터디", "퀴즈"],
      emoji: "📝",
      image: "https://file.notion.so/f/f/f6139788-f8f8-4586-a8b5-5a71317a4704/255cc6ad-5091-4b1b-a16f-a7ac42c910a0/KakaoTalk_20250409_200248633.jpg?table=block&id=1d016d49-8843-8080-9b78-c456bc4f2522&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&expirationTimestamp=1751911200000&signature=McQBYBnCZfNhx_v971oDO_9B1kZOvLQVJbfevWY2T98&downloadName=KakaoTalk_20250409_200248633.jpg",
      description: "팀별로 Python 기초와 실습을 함께하며 프로그래밍 역량을 쌓는 스터디입니다.",
    },
    {
      title: "미니 프로젝트",
      period: "2025년 4월 29일 ~ 2025년 6월 3일",
      tags: ["팀별 활동", "프로젝트", "발표"],
      emoji: "💻",
      image:"https://www.notion.so/image/attachment%3A6d118abe-06ca-4522-a5fd-c01b11fb2c80%3A4%EA%B8%B01%EC%A1%B0%EC%82%AC%EC%A7%84.jpg?table=block&id=22416d49-8843-80f2-8bcd-cb17d9b70077&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=febdf966-604c-4949-9bc0-767e3a52a86c&cache=v2",
      description: "팀별로 주제를 정해 실제 프로젝트를 기획·구현하고 결과를 발표하는 실전 경험 과정입니다.",
    },
    {
      title: "자율 주제 프로젝트",
      period: "2025년 9월 2일 ~ 2025년 9월 30일",
      tags: ["팀별 활동", "프로젝트", "발표"],
      emoji: "💡",
      image: "https://www.notion.so/image/attachment%3Abaf245f7-f185-4a14-9142-96c39ecafb7e%3A%EA%B3%B5%EA%B3%B5%EC%95%BD%EA%B5%AD%EC%82%AC%EC%A7%84.jpg?table=block&id=22816d49-8843-80e5-8baa-c6aeb4819601&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=febdf966-604c-4949-9bc0-767e3a52a86c&cache=v2",
      description: "관심 있는 주제를 자유롭게 선정해 팀별로 프로젝트를 수행하는 창의적 활동입니다.",
    },
  ];

  // 기존 기수 커리큘럼 데이터
  const oldMemberCurriculum = [
    {
      title: "머신러닝 해커톤",
      period: "2025년 3월 11일 ~ 2025년 4월 7일",
      tags: ["팀별 활동", "해커톤"],
      emoji: "📘",
      image: "https://file.notion.so/f/f/f6139788-f8f8-4586-a8b5-5a71317a4704/d67ec17b-b6a2-456b-b641-1a58ea36bebf/KakaoTalk_20250513_182043271_01.jpg?table=block&id=1f216d49-8843-80c5-aa74-f0c53d43ac9a&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&expirationTimestamp=1751932800000&signature=f_qzgB9pJ_HNA-YssOs4mZTEySiMBnGd0Q3OM2xw6xE&downloadName=KakaoTalk_20250513_182043271_01.jpg",
      description: "팀별로 머신러닝 문제를 해결하며 실전 경험과 협업 능력을 키우는 해커톤입니다.",
    },
    {
      title: "자율주제 프로젝트",
      period: "2025년 4월 29일 ~ 2025년 6월 1일",
      tags: ["팀별 활동", "WIL", "프로젝트"],
      emoji: "💻",
      image:"https://www.notion.so/image/attachment%3A4f99db19-1fd2-4934-80d8-92bcec207deb%3AKakaoTalk_20250604_144311823.jpg?table=block&id=22416d49-8843-8045-a2a2-df3d29ecd880&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=febdf966-604c-4949-9bc0-767e3a52a86c&cache=v2",
      description: "관심 분야를 직접 선정해 팀별로 프로젝트를 기획·구현하는 심화 활동입니다.",
    },
    {
      title: "NLP 스터디",
      period: "2025년 8월 5일 ~ 2025년 9월 1일",
      tags: ["팀별 활동", "프로젝트"],
      emoji: "🤖",
   image:"https://www.notion.so/image/attachment%3A5c643df2-d112-495e-9fa3-2ab3b3be2cad%3AKakaoTalk_20250604_144311823_03.jpg?table=block&id=22416d49-8843-80bf-b033-dcd6bf615a18&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=febdf966-604c-4949-9bc0-767e3a52a86c&cache=v2",
      description: "자연어처리 이론과 실습을 팀별로 진행하는 프로젝트형 스터디입니다.",
    },
    {
      title: "기업 데이터 분석 프로젝트",
      period: "2025년 9월 2일 ~ 2025년 12월 2일",
      tags: ["팀별 활동", "WIL", "프로젝트"],
      emoji: "🏢",
    },
    {
      title: "산학 협력 프로젝트",
      period: "기간 미정",
      tags: ["팀별 활동", "WIL", "프로젝트"],
      emoji: "🤝",
    },
  ];

  return (
    <div className="space-y-16">
      {/* HERO: 비전 메시지 및 부제 */}
      <section className="flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-[#E16575] to-[#F2AC7D] bg-clip-text text-transparent mb-4 font-pretendard">함께 배우고, 함께 성장하는 CODE</h1>
        <p className="text-lg md:text-2xl text-gray-700 font-pretendard">진지함과 따뜻함, 배움과 협력, 그리고 성장의 가치를 추구하는 경영대학 소속 IT 동아리입니다.</p>
      </section>
      {/* 1. 동아리 소개 */}
      <section>
        <h2 className="text-2xl font-bold bg-gradient-to-br from-[#E16575] to-[#F2AC7D] bg-clip-text text-transparent mb-3">동아리소개</h2>
        <div className="text-lg text-gray-800 font-pretendard space-y-4">
          <p>
            <b>CODE</b>는 <b>'데이터와 인공지능'이라는 바다에 뛰어들어, 더 넓은 세상을 경험하고 더 나은 가치를 창출하고 싶은 학생들이 모인</b> 경희대학교 경영대학 유일의 <b>데이터사이언스 동아리</b>입니다.
          </p>
          <p>
            우리는 서로를 지지하고 도우면서 때로는 동료가, 때로는 멘토가 되는 <b>'함께 배우고 함께 성장하는' 공동체를 지향</b>합니다.
          </p>
          <p>
            <b>파이썬 언어를 기반으로 한 스터디 활동, 프로젝트 및 세미나, 5분 스피치 및 특강</b>을 통해 기반 지식을 쌓습니다. 한 번도 경험해보지 않은 세계에 쉽게 발을 들일 수 있도록 아주 기초부터 <b>함께 배워나갑니다.</b>
          </p>
          <p>
            <b>트랙별 프로젝트</b>를 통해 배운 지식을 활용합니다. 내가 배운 지식으로 어떤 가치를 창출해낼 수 있을지 고민합니다. 고민한 것들을 <b>세미나</b>에서 나누고, 피드백하며 <b>함께 성장합니다.</b>
          </p>
        </div>
      </section>

      {/* 3. 신입 기수 커리큘럼 */}
      <section>
        <h2 className="text-2xl font-bold bg-gradient-to-br from-[#E16575] to-[#F2AC7D] bg-clip-text text-transparent mb-4">‘25년 CODE 신입 기수 활동 커리큘럼</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {newMemberCurriculum.map((item, idx) => (
            <div key={idx} className="bg-white border rounded-xl shadow hover:shadow-lg transition p-5 min-w-[220px] min-h-[260px] flex flex-col gap-2">
              {item.image && (
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-2 bg-white" />
              )}
              <div className="font-bold text-lg text-dahong mb-1">{item.title}</div>
              {item.description && (
                <div className="text-sm text-gray-700 mb-1 line-clamp-2">{item.description}</div>
              )}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 기존 기수 커리큘럼 */}
      <section>
        <h2 className="text-2xl font-bold bg-gradient-to-br from-[#E16575] to-[#F2AC7D] bg-clip-text text-transparent mb-4">‘25년 CODE 기존 기수 활동 소개</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {oldMemberCurriculum.map((item, idx) => (
            <div key={idx} className="bg-white border rounded-xl shadow hover:shadow-lg transition p-5 min-w-[220px] min-h-[260px] flex flex-col gap-2">
              {item.image && (
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-2 bg-white" />
              )}
              <div className="font-bold text-lg text-dahong mb-1">{item.title}</div>
              {item.description && (
                <div className="text-sm text-gray-700 mb-1 line-clamp-2">{item.description}</div>
              )}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
