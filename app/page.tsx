export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg">
        <input type="text" />
        <button className="rounded-sexy-name mt-tomato h-10 w-full bg-black text-white">
          Submit
        </button>
      </div>
    </main>
  );
}
