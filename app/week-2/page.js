import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">Student Information</h1>
      <StudentInfo />
    </main>
  );
}