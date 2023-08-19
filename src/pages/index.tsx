import { HomeTabs } from "~/components/HomeTabs";

function Home() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center gap-10 bg-gradient-to-br from-slate-400 to-slate-800">
      <div></div>
      <div className="grow-1 mb-8 mt-8 h-[95%] w-[15%] rounded-xl bg-red-300/10 p-6 shadow-xl backdrop-blur-md">
        <h1 className="text-3xl text-gray-100">Navigation</h1>
      </div>
      <div className="grow-6 mb-8 mt-8 h-[95%] w-[60%] rounded-xl bg-red-300/10 p-6 shadow-xl backdrop-blur-md">
        <HomeTabs></HomeTabs>
      </div>
    </div>
  );
}

export default Home;
