import programs from "@/data/programs";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ProgramList() {
  return (
    <>
      <Header />
      <div>
      <h1>Program List</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.name}>{program.name}</li>
        ))}
      </ul>
      </div>
      <Footer />
    </>
  );
}