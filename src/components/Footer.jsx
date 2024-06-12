const Footer = () => {
    const date = new Date();
    return <div className="text-center bg-neutral-950 text-white/50 text-xs p-1 font-extralight">&#169; Wojciech Jechowski {date.getFullYear()}</div>
}

export default Footer;