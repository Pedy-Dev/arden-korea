# Arden Korea (아르덴)

부산 카페를 위한 신뢰할 수 있는 수입 원료 파트너

## 프로젝트 소개

아르덴(Arden)은 B2B 카페 고객을 위한 수입 원료 납품 회사입니다. 정식 수입, 투명한 서류, 부산 기반 빠른 납품을 핵심 가치로 합니다.

## 기술 스택

- **Framework**: Next.js 16.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Deploy**: Vercel

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
arden-korea/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 + SEO
│   ├── page.tsx            # 홈페이지
│   ├── process/page.tsx    # 프로세스 페이지
│   ├── contact/page.tsx    # 문의 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # 홈페이지 섹션 컴포넌트
│   └── ui/                 # 재사용 UI 컴포넌트
└── public/
    └── images/             # 정적 이미지
```

## 페이지 구성

- **/** - 메인 랜딩 페이지
- **/process** - 납품 프로세스 상세
- **/contact** - 납품 문의 폼

## Vercel 배포

```bash
# GitHub에 푸시 후
vercel deploy

# 또는 Vercel 대시보드에서 GitHub 연동
```

## 향후 연동 계획

- Contact 폼 → Email API (Resend, SendGrid 등)
- 리뷰 시스템 → Supabase
- 제품 추가 시 CMS 연동

## 회사 정보

- **상호**: 아르덴(Arden)
- **대표**: 염재민
- **사업자등록번호**: 306-18-52231
- **주소**: 부산광역시 사상구 새벽로 170, 3층 381호(감전동)
- **이메일**: duawoals3078@gmail.com

---

© 2025 Arden. All rights reserved.
