import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Select from '../../components/common/Select';

const AssessmentManagement = () => {
  const mockBookings = [
    {
      id: 1,
      date: '2024-01-15',
      time: '14:00',
      name: '김민준',
      subject: '수학',
      grade: '중등1',
      center: '강남센터',
      phone: '010-1234-5678',
      status: '예약완료'
    },
    {
      id: 2,
      date: '2024-01-15',
      time: '15:30',
      name: '이서연',
      subject: '과학',
      grade: '초등5',
      center: '서초센터',
      phone: '010-2345-6789',
      status: '검사완료'
    },
    // Add more mock data as needed
  ];

  const statusColors = {
    '예약완료': 'primary',
    '검사완료': 'success',
    '취소': 'danger'
  };

  const filterOptions = {
    center: [
      { value: 'all', label: '전체 센터' },
      { value: '강남센터', label: '강남센터' },
      { value: '서초센터', label: '서초센터' },
      { value: '송파센터', label: '송파센터' }
    ],
    status: [
      { value: 'all', label: '전체 상태' },
      { value: '예약완료', label: '예약완료' },
      { value: '검사완료', label: '검사완료' },
      { value: '취소', label: '취소' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader
        title="진단검사 예약 관리"
        description="진단검사 예약 현황을 관리할 수 있습니다."
      />

      <div className="mb-6 flex flex-wrap gap-4">
        <Select
          options={filterOptions.center}
          className="w-48"
          onChange={(value) => console.log('Center:', value)}
        />
        <Select
          options={filterOptions.status}
          className="w-48"
          onChange={(value) => console.log('Status:', value)}
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  예약일시
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이름
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  과목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  학년
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  센터
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  연락처
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.date}</div>
                    <div className="text-sm text-gray-500">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.grade}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.center}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={statusColors[booking.status]}>
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      수정
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      취소
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AssessmentManagement;