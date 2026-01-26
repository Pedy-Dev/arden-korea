import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">아르덴(Arden)</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>대표: 염재민</p>
              <p>사업자등록번호: 306-18-52231</p>
              <p>주소: 부산광역시 사상구 새벽로 170, 3층 381호(감전동)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <nav className="space-y-2">
              <Link
                href="/process"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Process
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>이메일: ardenbizkorea@gmail.com</p>
              <p className="text-xs mt-4">
                본 사이트는 정보 제공 목적이며, 주문은 문의 후 진행됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Arden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
