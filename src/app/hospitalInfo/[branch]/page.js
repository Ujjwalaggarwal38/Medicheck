import HospitalBlogPage from "@/component/HospitalPages/HospitalBlogpage";

export default async function BranchPage({params}) {
      const { branch } = await params; // ✅ await params here

    return <HospitalBlogPage branch={branch} />;
}