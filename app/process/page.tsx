import { Metadata } from 'next';
import { ClipboardList, Shield, Truck, FileCheck, Package, ThermometerSun, RefreshCw, Handshake } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '납품 프로세스 | 아르덴(Arden)',
  description: '아르덴의 투명하고 체계적인 4단계 납품 프로세스를 확인하세요.',
};

const steps = [
  {
    number: 1,
    title: '소싱 & 발주',
    icon: ClipboardList,
    description:
      '우리는 해외 공급처와의 장기 파트너십을 통해 안정적으로 원료를 확보합니다. 품질 기준을 충족하는 제품만 엄선하여 발주하며, 고객의 요구사항에 맞는 규격과 수량을 사전에 조율합니다. 모든 거래는 정식 계약을 통해 투명하게 진행됩니다.',
  },
  {
    number: 2,
    title: '정식 통관',
    icon: Shield,
    description:
      '식품위생법에 따른 정식 수입 절차를 철저히 준수합니다. 수입식품판매업 신고 완료 업체로서, 모든 통관 서류를 정확하게 구비하고 검역 절차를 거칩니다. 원산지증명서, 검역증명서 등 수입 관련 서류를 확보하여 요청 시 제공해 드립니다.',
  },
  {
    number: 3,
    title: '보관 & 로트 관리',
    icon: Package,
    description:
      '입고된 모든 제품은 로트번호와 입고일을 기록하여 체계적으로 관리합니다. 선입선출(FIFO) 원칙을 철저히 준수하여 항상 신선한 제품을 납품합니다. 적정 온도와 습도를 유지하며, 정기적인 품질 점검을 실시합니다.',
  },
  {
    number: 4,
    title: '납품 & 서류 제공',
    icon: Truck,
    description:
      '부산/경남 지역은 당일 배송이 가능하며, 전국 배송도 지원합니다. 납품 시 세금계산서와 거래명세서를 정규 발행하며, 요청 시 수입 서류 사본도 함께 제공합니다. 투명한 거래를 위해 모든 서류를 빠짐없이 준비합니다.',
  },
];

const standards = [
  {
    icon: FileCheck,
    title: '로트/입고일 관리',
    description: '모든 입고 제품은 로트번호와 입고일 기록',
  },
  {
    icon: RefreshCw,
    title: '선입선출 원칙',
    description: '먼저 들어온 제품부터 출고',
  },
  {
    icon: Handshake,
    title: '클레임 대응',
    description: '품질 이슈 발생 시 즉시 교체/환불',
  },
  {
    icon: ThermometerSun,
    title: '보관 원칙',
    description: '온도/습도 관리, 정기 점검',
  },
];

export default function ProcessPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            아르덴의 납품 프로세스
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            투명하고 체계적인 4단계 과정
          </p>
        </div>
      </section>

      {/* 4-Step Detailed Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      Step {step.number}
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
            우리가 지키는 기준
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <standard.icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {standard.title}
                </h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              파트너십 안내
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                통관 및 물류는 전문 파트너사와 협업하여 안전하게 진행합니다.
              </p>
              <p>
                필요 시 고객사와 직접 통관 업체 연결도 가능합니다.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                납품 문의하기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
