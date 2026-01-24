'use client';

import Button from '@/components/ui/Button';
import { MessageCircle, Phone, Mail, MapPin, Building2, User, Clock } from 'lucide-react';

export default function ContactPage() {
  // 카카오톡 채널 URL (심사 완료 후 실제 URL로 교체)
  const kakaoChannelUrl = '#'; // 예: 'http://pf.kakao.com/_xabc123'

  const handleKakaoClick = () => {
    if (kakaoChannelUrl === '#') {
      alert('카카오톡 채널 심사 진행 중입니다.\n임시로 전화(0507-1365-3078) 또는 이메일로 문의해 주세요.');
    } else {
      window.open(kakaoChannelUrl, '_blank');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            납품 문의하기
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            카카오톡으로 편하게 상담하세요
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 카카오톡 메인 CTA */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 md:p-12 text-center mb-8">
            <MessageCircle className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              카카오톡 상담 (추천)
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              가장 빠르고 편한 상담 방법입니다
            </p>
            <Button
              onClick={handleKakaoClick}
              variant="primary"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              카카오톡 채널 상담하기
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              {kakaoChannelUrl === '#'
                ? '※ 현재 채널 심사 진행 중입니다. 전화나 이메일로 문의 주세요.'
                : '클릭하면 카카오톡 채널이 열립니다'}
            </p>
          </div>

          {/* 기타 연락 방법 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* 전화 문의 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">전화 문의</h3>
                  <a
                    href="tel:0507-1365-3078"
                    className="text-xl font-bold text-blue-700 hover:underline block mb-1"
                  >
                    0507-1365-3078
                  </a>
                  <p className="text-sm text-gray-500">
                    모바일에서 클릭하면 바로 연결됩니다
                  </p>
                </div>
              </div>
            </div>

            {/* 이메일 문의 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">이메일 문의</h3>
                  <a
                    href="mailto:duawoals3078@gmail.com"
                    className="text-blue-700 hover:underline block break-all"
                  >
                    duawoals3078@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    상세한 내용은 이메일로 보내주세요
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 문의 시 안내사항 */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-12">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-700" />
              문의 시 알려주시면 좋은 정보
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-1">•</span>
                <span>상호 및 담당자명</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-1">•</span>
                <span>월 예상 사용량 (예: 10kg, 50kg)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-1">•</span>
                <span>원하는 포장 단위 (예: 1kg 소분, 10kg 벌크)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-1">•</span>
                <span>납품 희망 지역 (예: 부산 해운대구)</span>
              </li>
            </ul>
          </div>

          {/* 회사 정보 */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              회사 정보
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">아르덴(Arden)</p>
                  <p className="text-gray-600 text-sm">수입식품판매업 신고 완료</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <User className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">대표</p>
                  <p className="text-gray-600">염재민</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">주소</p>
                  <p className="text-gray-600 text-sm">
                    부산광역시 사상구 새벽로 170, 3층 381호(감전동)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  사업자등록번호: 306-18-52231
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
