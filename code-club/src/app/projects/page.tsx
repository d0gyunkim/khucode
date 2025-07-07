import ProjectCard from "./ProjectCard";

const categories = [
  {
    title: "시각화 프로젝트",
    projects: [
      {
        title: "K-Beauty 온라인 판매 및 산업 구조 분석",
        summary: "공공데이터를 활용해 K-화장품의 온라인 판매 추세를 분석하고, 산업 구조 변화와 주요 기업(아모레퍼시픽·코스맥스)의 실적 흐름을 비교해 K-뷰티 산업의 성장 요인을 시각화",
        partner: "서울시 공공데이터",
        tags: ['화장품 산업', '아모레퍼시픽', '코스맥스','책임판매업체', 'ODM'],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A1d5fbd4f-3e9b-464f-889f-a99e51f444f6%3AKakaoTalk_20250705_211426335.jpg?table=block&id=22816d49-8843-80ac-a76f-efa4ef9a9413&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=1420&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d4988438004821df57c60f92b51&pm=c",
      },
      {
        title: "하천 오염 상태 및 하수처리 실태 분석을 통한 서울시 물재생센터 입지 추천",
        summary: "서울시의 수질오염도 및 하수처리장 처리율 데이터를 분석해 지역별 하천 수질 문제를 파악하고, 중앙관리형 물재생센터 도입의 필요성과 후보 입지를 제안.",
        partner: "서울시 공공 데이터",
        tags: ['하천오염', '하수처리', '수질지표', '물재생센터', '공간분석', '서울시 환경정책'],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A02cdc11d-2e74-4021-b7bb-2e3cbbd63c12%3A3%EA%B8%B0%EC%9E%90%EC%9C%A0%EC%A3%BC%EC%A0%9C%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%88%98%EC%83%81%EC%82%AC%EC%A7%84.jpg?table=block&id=22816d49-8843-80ed-bc98-f52dd450e118&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=1420&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22816d498843809e85f5c14bba550fef&pm=c",
      },
      {
        title: "도시 구조가 열섬 현상에 미치는 영향 분석",
        summary: "서울시 자치구별 기온, 녹지율, 건물 에너지 사용량 및 도로율 데이터를 분석해, 도시 구조 요소가 열섬 현상에 어떻게 영향을 미치는지 규명하고 정책 제안까지 도출",
        partner: "서울연구원",
        tags: ["열섬현상", "도시구조", "녹지율", "에너지사용량"],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A979a17ea-e3c4-40d1-8793-373d19106419%3A%EC%8A%B9%ED%98%81%EC%9D%B4%EC%82%AC%EC%A7%841.jpg?table=block&id=22816d49-8843-8024-9a82-f77fe263fafe&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22816d49884380249a82f77fe263fafe&pm=c",
      },
    ],
  },
  {
    title: "머신러닝 자율 주제",
    projects: [
      {
        title: "전세 거래 데이터 기반 이상 거래 탐지 모델 구축",
        summary: "동대문구 전세 거래 데이터를 바탕으로, K-means 알고리즘과 파생변수를 활용해 전세사기 의심 거래를 탐지하는 모델을 구축하고 지역별 위험군을 시각화",
        partner: "서울시 공공 데이터",
        tags: ['클러스터링', '비지도학습', '전세사기', '동대문구', 'PCA', 'K-means'],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A4f99db19-1fd2-4934-80d8-92bcec207deb%3AKakaoTalk_20250604_144311823.jpg?table=block&id=22416d49-8843-8045-a2a2-df3d29ecd880&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22416d4988438045a2a2df3d29ecd880&pm=c",
      },
      {
        title: "약물 복용 데이터 기반 개인 특성 분류 모델",
        summary: "약물 복용 이력 데이터(Drug Consumption)를 기반으로 개인의 심리·사회적 특성을 분석하고, 다양한 분류 알고리즘을 비교하여 최적의 예측 모델을 탐색",
        partner: "Kaggle",
        tags: ['개인 특성 분석','분류모델', 'PCA','SVM', 'KNN', '의사결정나무'],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A3558b51c-520e-4a04-9836-9fdf08800789%3AKakaoTalk_20250706_211731077_04.jpg?table=block&id=22816d49-8843-80f0-9bf4-ced39a143ee9&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22816d49884380f09bf4ced39a143ee9&pm=c",
      },
      {
        title: "팟캐스트 청취 시간 예측 모델",
        summary: "팟캐스트 에피소드 특성과 청취 시간 간의 관계를 분석해, 콘텐츠 기획 단계에서 청취 이탈을 줄이기 위한 전략을 데이터 기반으로 도출",
        partner: "Kaggle",
        tags: ["XGBoost", "회귀모델"],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A5c643df2-d112-495e-9fa3-2ab3b3be2cad%3AKakaoTalk_20250604_144311823_03.jpg?table=block&id=22416d49-8843-80bf-b033-dcd6bf615a18&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22416d49884380bfb033dcd6bf615a18&pm=c",
      },
    ],
  },
  {
    title: "외부 공모전",
    projects: [
      {
        title: "춘천시 침수 산사태 취약 지역 분석",
        summary: "춘천시의 침수 및 산사태 위험 지역을 데이터 기반으로 분석하여, 취약 지역을 시각화하고 예방 대책을 제안.",
        partner: "춘천시청",
        tags: ["재난 분석", "시각화", "공공데이터", "지리정보"],
        image: "https://veil-legend-fae.notion.site/image/attachment%3A76cc8b9c-544d-4146-bfc0-4b5462f3ea6a%3A%EC%B6%98%EC%B2%9C%EC%8B%9C%EC%82%AC%EC%A7%84.jpg?table=block&id=22916d49-8843-8017-a3c7-c355dbcd07ae&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22916d4988438017a3c7c355dbcd07ae&pm=c",
      },
      {
        title: "금융 사막화 지역을 위한 방문형 은행 서비스",
        summary: "오프라인 금융 서비스 접근성을 제고하여 은행 접근성이 떨어지는 농어촌이나 중소도시에 거주하는 고령층 등 취약계층을 대상으로 금융 사막화 지역을 판별해 방문형 은행 장소를 추천하여 금융 취약계층의 접근성을 확보하는게 이바지",
        partner: "전라남도",
        tags: ["클러스터링", "DBSCAN", "KPI"],
        image: "https://www.newsprime.co.kr/data/photos/cdn/20240833/art_650646_1723527287.jpg",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22916d4988438095b41ad0d71d541622&pm=c",
      },
      {
        title: "CBDC 시대 키움증권의 생존 전략",
        summary: "CBDC 도입이 가져올 금융시장 변화에 대비하여, 키움증권이 자산토큰화·원앱 전략·AI 기반 자산관리로 경쟁력을 확보하고, 뮤직카우·테사와 협업하는 STO 기반 신사업 방향을 제안함",
        partner: '키움증권',
        tags: ["GAN", "Hackathon", "Award"],
        image: "https://veil-legend-fae.notion.site/image/attachment%3Af947de6b-f83a-411c-a83e-179e470d521a%3A%ED%82%A4%EC%9B%80%ED%82%A4%EC%9A%B0%EB%AF%B8%EC%82%AC%EC%A7%841.jpg?table=block&id=22816d49-8843-8041-9e52-ec9dc51d54bf&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22816d49884380419e52ec9dc51d54bf&pm=c",
      },
      {
        title: "서식 추천 자동화 챗봇",
        summary: "문서 작성 시 필요한 서식을 자동으로 추천해주는 챗봇 개발. 자연어 처리와 추천 알고리즘을 활용하여 사용자의 입력에 맞는 최적의 서식을 안내.",
        partner: "경희대학교",
        tags: ["챗봇", "자동화", "NLP", "추천시스템"],
        image: "https://veil-legend-fae.notion.site/image/attachment%3Ae7c4d4b9-44dd-42c5-b88f-6e5ae9b7cc20%3A%ED%94%84%EB%A1%AC%ED%94%84%ED%86%A4%EC%8B%9C%EC%83%81%EC%8B%9D1008%ED%98%B8.jpg?table=block&id=22916d49-8843-808b-a056-ce9424c6af2b&spaceId=f6139788-f8f8-4586-a8b5-5a71317a4704&width=2000&userId=&cache=v2",
        link: "https://veil-legend-fae.notion.site/CODE-22416d49884380cdb304f25651d31369?p=22916d498843808ba056ce9424c6af2b&pm=c",
      },
      {
        title: "2024년도 경희대 X 원티드랩 AI 프롬프톤 ",
        summary: "서울시의 다양한 빅데이터를 활용해 도시 문제를 해결하고, 데이터 기반 정책 제안을 도출한 해커톤 프로젝트.",
        partner: "서울시",
        tags: ["빅데이터", "해커톤", "도시문제", "정책제안"],
        image: "https://cdn.pixabay.com/photo/2017/08/10/07/32/people-2616677_1280.jpg",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      {categories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-br from-[#E16575] to-[#F2AC7D] bg-clip-text text-transparent">{category.title}</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {category.projects.map((project, pIdx) => (
              <ProjectCard key={pIdx} {...project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
} 