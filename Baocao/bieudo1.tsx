// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, LabelList } from 'recharts';

// const ProjectChart = () => {
//   const data = [
//     { name: "Khai trương Phùng Hưng", value: 68 },
//     { name: "TẾT 2024", value: 54 },
//     { name: "8/3", value: 107.5 },
//     { name: "Sinh nhật 7 năm - AN lên 7", value: 92.9 },
//     { name: "Khai trương AN Signature", value: 98.8 },
//     { name: "AN Ngũ Gia Khâm - Giá bạn người ơi", value: 61 },
//     { name: "Khai trương AN Phong Lan", value: 75 },
//     { name: "NTPMM Summer 2024", value: 54 },
//     { name: "Trung Thu 2024", value: 85.3 },
//     { name: "Khai trương Quang Trung", value: 81.5 },
//     { name: "20/10", value: 61.5 },
//     { name: "Kinh Bắc đó đây", value: 100 }
//   ];

//   return (
//     <div className="w-full h-[500px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 100
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             dataKey="name"
//             angle={-45}
//             textAnchor="end"
//             height={100}
//             interval={0}
//           />
//           <YAxis />
//           <Tooltip />
//           <ReferenceLine y={100} stroke="red" strokeDasharray="3 3" label={{ value: '100%', position: 'right' }} />
//           <Bar dataKey="value" fill="#8884d8" name="Hiệu quả">
//             <LabelList dataKey="value" position="top" fontSize={11} />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ProjectChart;