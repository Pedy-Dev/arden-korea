const specs = [
  { label: '형태', value: 'In-shell (껍질 있음)' },
  { label: '포장 단위', value: '벌크 (1kg, 5kg, 10kg 협의 가능)' },
  { label: '최소 주문량', value: '협의 (소량 주문 환영)' },
  { label: '리드타임', value: '재고 확인 후 협의' },
  { label: '납품 범위', value: '부산 → 전국 (부산/경남 우선)' },
  { label: '보관 조건', value: '실온 보관 가능' },
];

export default function ProductBlock() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            현재 공급 가능 상품
          </h2>
          <p className="text-gray-600">
            피스타치오 (추후 마시멜로, 쿠키용기 등 확장 예정)
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Description */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              피스타치오
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              정식 통관을 거친 고품질 피스타치오를 공급합니다.
              카페, 베이커리, 디저트 매장에서 활용하기 좋은 벌크 포장으로 제공되며,
              소량 주문도 환영합니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              모든 제품은 로트별 입고일 관리를 통해 신선도를 보장하며,
              필요 시 수입 서류 사본을 제공해 드립니다.
            </p>
          </div>

          {/* Right: Spec Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <tbody>
                {specs.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-6 py-4 font-medium text-gray-800 border-b border-gray-200 w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-gray-600 border-b border-gray-200">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
