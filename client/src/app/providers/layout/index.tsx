import { ToastContainer } from "react-toastify";

import { Footer } from "~modules/footer";
import { Header } from "~modules/header";
import { Layout } from "~shared/components";

const LayoutProvider: React.FC = () => {
  
  return (
    <>
      <ToastContainer style={{ fontSize: '15px' }} />
      <Layout
        headerSlot={<Header />}
        footerSlot={<Footer />}
      />
    </>
  );
};

export default LayoutProvider;
