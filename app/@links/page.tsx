const Links = () => {
  const linkClasses = `no-underline
    font-normal
    text-white
    text-xs
    bg-sky-950
    p-2
    rounded-md
    hover:opacity-80
    active:shadow-sm
    active:shadow-sky-900`;

  return (
    <section>
      <ul className="list-none p-0">
        <li className="flex gap-5 uppercase">
          <a href="#" className={linkClasses}>
            Portfolio
          </a>
          <a href="#" className={linkClasses}>
            About me
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Links;
