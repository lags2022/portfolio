const Footer = () => {
  return (
    <>
      <div className="border w-[95%] m-auto" />
      <div className="flex m-auto w-[80vw] py-2 items-center justify-between text-sm max-w-screen-xl">
        <h5>{new Date().getFullYear()} &copy; All Rights Reserved</h5>
        <h5>Built by Luis Guzman</h5>
      </div>
    </>
  );
};

export default Footer;
