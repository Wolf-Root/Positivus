export default function SectTitle({ Title, Des }: { Title: string; Des: string }) {
  return (
    <div className="py-5 flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 sm:gap-8 lg:gap-10">
      <h2 className="bg-primary p-2 rounded-md">{Title}</h2>
      <p className="font-medium w-full lg:w-2/3 xl:w-1/2 text-center md:text-start">{Des}</p>
    </div>
  );
}
