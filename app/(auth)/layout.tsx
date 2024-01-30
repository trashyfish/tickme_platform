const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 flex flex-col content-center items-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <div className=" mb-3">
        <img src="/assets/images/logo.svg" alt="" width={128} height={38} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
