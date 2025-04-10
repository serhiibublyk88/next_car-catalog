import Layout from "@/components/layout/Layout";
import { NextPageAuth } from "@/interfaces/page.interface";

const AboutPage: NextPageAuth = () => {
  return (
    <Layout title="About">
      <div style={{ textAlign: "center" }}>About</div>
    </Layout>
  );
};
// AboutPage.isOnlyUser = true;

export default AboutPage;
