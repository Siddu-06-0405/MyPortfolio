const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Siddu-06-0405" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/siddardha-chaitanya-5a804b298/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/twitter.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.instagram.com/ch_siddhardha/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">©Siddardha.me 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
