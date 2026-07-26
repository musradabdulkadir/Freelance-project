import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold outfit">Job Details</h1>

      <p className="mt-5 text-xl">Job ID : {id}</p>
    </div>
  );
}
