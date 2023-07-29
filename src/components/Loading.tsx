export const Loading = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="box-content bg-white w-full h-[50px] rounded-b-[100%] drop-shadow-lg" />
      <p className="flex justify-center items-end gap-[10px] text-[40px] text-center text-orange py-[100px]">
        กำลังโหลด <span className="loading loading-dots loading-lg"></span>
      </p>
      <div className="bottom-0 box-content bg-white w-full h-[50px] rounded-t-[100%]" />
    </div>
  )
}
