const listSocial = [
    {
        name: "GitHub",
        icon: "fa-brands fa-github",
        link: "https://www.github.com/Ballon14",
    },
    {
        name: "X",
        icon: "fa-solid fa-x",
        link: "https://x.com/iqbal140605",
    },
    {
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/ballonnnn__",
    },
    {
        name: "WhatsApp",
        icon: "fa-brands fa-whatsapp",
        link: "https://api.whatsapp.com/send?phone=6281515630448&text=Haiii%F0%9F%A4%A9",
    },
]

const BoxSocial = () => {
  return (
    <div className="mt-15 flex gap-2">
      {listSocial.map((item, index) => (
        <button
          key={index}
          className="cursor-pointer rounded-full border-2  border-(--bg-secondary-cray) px-2 py-1 hover:bg-(--bg-secondary-cray)"
          onClick={() => window.open(item.link, "_blank")}
        >
          <i className={`${item.icon} text-md text-black`}></i>
        </button>
      ))}
    </div>
  );
};
export default BoxSocial;
