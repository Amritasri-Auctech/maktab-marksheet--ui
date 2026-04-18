import React, { forwardRef } from 'react'
import logo from '../assets/logo1.png'

const VerticalMarksheet = forwardRef(({ data = {} }, ref) => {
  // ✅ SAFE DEFAULT DATA (no crash)
  const safeData = {
    name: data?.name || '—',
    roll: data?.roll || '—',
    type: data?.type || '—',
    season: data?.season || '—',
    percentage: data?.percentage || 0,
    total: data?.total || 0,
    obtained: data?.obtained || 0,
    rank: data?.rank || '—',

    urdu: {
      handwriting: data?.urdu?.handwriting || 0,
      quote: data?.urdu?.quote || 0,
      sense: data?.urdu?.sense || 0,
      pronunciation: data?.urdu?.pronunciation || 0,
      mental: data?.urdu?.mental || 0,
      total: data?.urdu?.total || 0,
      obtained: data?.urdu?.obtained || 0,
    },

    theology: {
      branches: data?.theology?.branches || 0,
      principles: data?.theology?.principles || 0,
      total: data?.theology?.total || 0,
      obtained: data?.theology?.obtained || 0,
    },

    quran: {
      sense: data?.quran?.sense || 0,
      pronunciation: data?.quran?.pronunciation || 0,
      mental: data?.quran?.mental || 0,
      oral: data?.quran?.oral || 0,
      total: data?.quran?.total || 0,
      obtained: data?.quran?.obtained || 0,
    },
  }

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white border-2 border-gray-300 p-3 sm:p-5 text-[11px] sm:text-sm"
      dir="rtl"
    >
      {/* ================= HEADER ================= */}
      <div className="mb-1  pb-3" dir="rtl">
        {/* LOGO */}
        <div className="text-center mb-2">
          <img src={logo} alt="Logo" className="mx-auto w-28 sm:w-40 md:w-52 object-contain" />
        </div>

        {/* TITLE */}
        <h4 className="text-center font-bold text-xs sm:text-base leading-relaxed mb-2">
          نتیجہ امتحان ششماہی / سالانہ
          <br />
          مکاتب ملحقہ تنظیم المکاتب ۔ ہندوستان
        </h4>

        {/* HEADER DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] sm:text-sm">
          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-2">
              <span>{data?.date || '09-04-2026'}</span>
              <span>: تاریخ الفحص</span>
            </div>

            <div className="flex gap-2">
              <span>{data?.exam || 'ششماہی امتحان'}</span>
              <span>: اسم الفحص</span>
            </div>

            <div className="flex gap-2">
              <span>{data?.teacher || 'مولانا احمد رضا'}</span>
              <span>: نام مدرس</span>
            </div>
          </div>

          {/* LEFT SIDE */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-2">
              <span>{data?.state || 'اتر پردیش'}</span>
              <span>: ولاية</span>
            </div>

            <div className="flex gap-2">
              <span>{data?.district || 'لکھنؤ'}</span>
              <span>: ضلع</span>
            </div>

            <div className="flex gap-2">
              <span>{data?.post || 'سعادت گنج'}</span>
              <span>: ڈاکخانہ</span>
            </div>

            <div className="flex gap-2">
              <span>{data?.maktab || 'مکتب امامیہ نورباری'}</span>
              <span>: مکتب</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STUDENT INFO ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 border-y py-2 mb-4">
        <Info label="نام طالب علم" value={safeData.name} />
        <Info label="رول نمبر" value={safeData.roll} />
        <Info label="قسم" value={safeData.type} />
        <Info label="سیزن" value={safeData.season} />
        <Info label="درجہ" value={safeData.rank} />
        <Info label="فیصد" value={`${safeData.percentage}%`} />
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">
        <table className="w-full border text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-1">تفصیل</th>
              <th className="border p-1">اردو</th>
              <th className="border p-1">دینیات</th>
              <th className="border p-1">قرآن</th>
            </tr>
          </thead>

          <tbody>
            <Row label="خوشخطی" urdu={safeData.urdu.handwriting} />
            <Row label="اقتباس" urdu={safeData.urdu.quote} />
            <Row label="فہم" urdu={safeData.urdu.sense} quran={safeData.quran.sense} />
            <Row
              label="تلفظ"
              urdu={safeData.urdu.pronunciation}
              quran={safeData.quran.pronunciation}
            />
            <Row label="ذہنی" urdu={safeData.urdu.mental} quran={safeData.quran.mental} />

            <Row label="شاخیں" theology={safeData.theology.branches} />
            <Row label="اصول" theology={safeData.theology.principles} />
            <Row label="زبانی" quran={safeData.quran.oral} />

            <tr className="bg-gray-50 font-semibold">
              <td className="border p-1">کل</td>
              <td className="border">{safeData.urdu.total}</td>
              <td className="border">{safeData.theology.total}</td>
              <td className="border">{safeData.quran.total}</td>
            </tr>

            <tr className="bg-gray-100 font-semibold">
              <td className="border p-1">حاصل</td>
              <td className="border">{safeData.urdu.obtained}</td>
              <td className="border">{safeData.theology.obtained}</td>
              <td className="border">{safeData.quran.obtained}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="mt-4 border bg-gray-100 px-3 py-2 flex flex-wrap justify-between font-semibold">
        <span>کل نمبر: {safeData.total}</span>
        <span>حاصل شدہ: {safeData.obtained}</span>
        <span>فیصد: {safeData.percentage}%</span>
        <span>درجہ: {safeData.rank}</span>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="flex justify-between mt-8 text-xs">
        <span>استاد کے دستخط</span>
        <span>پرنسپل کے دستخط</span>
      </div>
    </div>
  )
})

/* COMPONENTS */
const Info = ({ label, value }) => (
  <div className="flex justify-end gap-2">
    <span>{value}</span>
    <span>: {label}</span>
  </div>
)

const Row = ({ label, urdu = '-', theology = '-', quran = '-' }) => (
  <tr>
    <td className="border p-1">{label}</td>
    <td className="border">{urdu}</td>
    <td className="border">{theology}</td>
    <td className="border">{quran}</td>
  </tr>
)

export default VerticalMarksheet
