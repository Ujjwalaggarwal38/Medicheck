import SpecialityPage from "@/component/Speciality/Speciality";

export default async function BranchPage({params}) {
      const { branch } = await params;

    return <SpecialityPage branch={branch} />;
}