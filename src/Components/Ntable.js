import React from 'react';
const notices = [
  {
    id: 1,
    date: '2082-03-09',
    title: 'National TVET Curriculum Framework (NTCF) सम्बन्धी सूझाब उपलब्ध गराईदिने बारे।',
    published: 'CTEVT Web Admin.',
    file: ' https://ctevt.org.np/documents/2082-3-9-national-tvet-curriculum-framework-ntcf-b-ulb-ii-b'
  },
  {
    id: 2,
    date: '2082-02-23',
    title: 'Padpurti final result of notice 59-60',
    published: 'CTEVT Web Admin',
    file: 'https://ctevt.org.np/documents/2082-02-23-padpurti-final-result-of-notice-59-60'
  },
  {
    id: 3,
    date: '2082-02-22',
    title: 'पदपुर्ति समितीको विज्ञापन न. ५६-५८ को अन्तिम नतिजा प्रकाशन',
    published: 'CTEVT Web Admin',
    file: 'https://example.com/notice2.pdf'
  },
  {
    id: 4,
    date: '2082-02-21',
    title: 'पदपुर्ति सम्बन्धी सूचना',
    published: 'CTEVT Web Admin',
    file: 'https://ctevt.org.np/documents/2082-2-21-b'
  },
  {
    id: 5,
    date: '2082-02-13',
    title: 'Notice for request letter',
    published: 'CTEVT Web Admin',
    file: ' https://ctevt.org.np/documents/2082-02-13-notice-for-request-letter'
  },
  {
    id: 6,
    date: '2082-02-05',
    title: 'समकक्षता सम्बन्धी अत्यन्त जरुरी सूचना',
    published: 'CTEVT Web Admin',
    file: ' https://ctevt.org.np/documents/2082-02-05-b-a'
  }
];

const Ntable = () => {
  return (
    <div>
      <div className='bg-blue-gray-50 mt-6  text-center font-bold text-2xl p-4 '>
        Notice Board</div>
       <button
      className="flex ml-[1300px] bg-blue-700 hover:bg-blue-400  text-white px-4 py-2 rounded-xl shadow-md transition duration-200">
  <span>Admin</span>
    </button>
     <div className="overflow-x-auto mt-8">
        <table className="min-w-full table-fixed bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-10 py-2 px-3 border font-semibold">SN</th>
              <th className="w-32 py-2 px-3 border font-semibold">Published Date</th>
              <th className="w-1/2 py-2 px-3 border font-semibold text-left">Notice Title</th>
              <th className="w-40 py-2 px-3 border font-semibold">Published by</th>
              <th className="w-20 py-2 px-3 border font-semibold">File</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={notice.id} className="text-center hover:bg-gray-50">
                <td className="py-2 px-3 border">{index + 1}</td>
                <td className="py-2 px-3 border">{notice.date}</td>
                <td className="py-2 px-3 text-justify border">{notice.title}</td>
                <td className="py-2 px-3 border">{notice.published}</td>
                <td className="py-2 px-3 border">
                  <a
                    href={notice.file.trim()}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ntable;
