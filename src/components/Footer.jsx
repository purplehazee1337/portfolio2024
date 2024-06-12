const Footer = () => {
  const date = new Date();
  return (
    <div className="pb-12 sm:pb-0 text-center sm:text-left bg-neutral-950 text-white/50 text-xs p-1 font-extralight z-100">
      &#169; Wojciech Jechowski {date.getFullYear()}
    </div>
  );
};

export default Footer;
