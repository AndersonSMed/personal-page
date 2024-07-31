const MoreInfo = () => {
  const linkClasses = `no-underline
  text-sky-950`;

  return (
    <ul className="list-none p-0 flex gap-5 m-0 uppercase">
      <li>
        <a href="#" className={linkClasses}>
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" className={linkClasses}>
          About me
        </a>
      </li>
    </ul>
  );
};

export default MoreInfo;
