import React from "react";

const socialLinks = [
  {
    link: "//github.com/wexller",
    targetBlank: true,
    mdiClass: "github",
  },
  {
    link: "//linkedin.com/in/maxim-davydov-0b1356183/",
    targetBlank: true,
    mdiClass: "linkedin",
  },
  {
    link: "mailto:maxim.davydov.94@gmail.com",
    targetBlank: false,
    mdiClass: "email",
  },
  {
    link: "//t.me/wexllers",
    targetBlank: true,
    mdiClass: "telegram",
  },
  {
    link: "//instagram.com/",
    targetBlank: true,
    mdiClass: "instagram",
  },
];

const SocialLinks = () => {
  return (
    <div className="social-block">
      {socialLinks.map((item, key) => {
        const attributes = {
          ...(item.targetBlank && {
            target: "_blank",
            rel: "noopener noreferrer",
          }),
        };

        return (
          <a key={key} href={item.link} className="social-item" {...attributes}>
            <span className={`mdi mdi-${item.mdiClass}`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
