export const Loading = () => {
  return (
    <div className="w-full h-screen bg-white">
      <p className="flex justify-center items-end gap-[10px] text-[40px] text-center text-orange py-[100px]">
        กำลังโหลด <span className="loading loading-dots loading-lg"></span>
      </p>
    </div>
  )
}
