const Footer = () => {
  return (
    <>
      <div className="border w-[95%] m-auto" />
      <div className="flex m-auto w-[95%] py-2 items-center justify-between text-sm">
        <h5>{new Date().getFullYear()} © All Rights Reserved</h5>
        <h5>Built by Luis Guzman</h5>
      </div>
    </>
  );
};

export default Footer;
