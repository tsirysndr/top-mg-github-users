import { useState, useEffect } from "react";

export const useCleanUrl = (url: string) => {
  const [markdown, setMarkdown] = useState<string>("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) =>
        setMarkdown(
          text
            .replace(
              /https:\/\/github.com\/gayanvoice\/insights\/blob\/master\/graph\/373383893\/small\/week.png/g,
              "https://raw.githubusercontent.com/gayanvoice/my-profile-views-counter/master/graph/373383893/small/week.png"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/insights\/blob\/master\/svg\/373383893\/badge.svg/g,
              "https://raw.githubusercontent.com/gayanvoice/my-profile-views-counter/master/svg/373383893/badge.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/whatsapp.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/whatsapp.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/telegram.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/telegram.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/linkedin.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/linkedin.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/vkontakte.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/vkontakte.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/blogger.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/blogger.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/wordpress.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/wordpress.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/gmail.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/gmail.svg"
            )
            .replace(
              /https:\/\/github.com\/gayanvoice\/github-active-users-monitor\/blob\/master\/public\/images\/icons\/reddit.svg/g,
              "https://github.com/gayanvoice/top-github-users-action/raw/master/public/images/icons/reddit.svg"
            )
            .replace(
              /https:\/\/github.com\/tsirysndr\/top-github-users\/blob\/main\/markdown\/total_contributions\/madagascar.md/g,
              "/total"
            )
            .replace(
              /https:\/\/github.com\/tsirysndr\/top-github-users\/blob\/main\/markdown\/public_contributions\/madagascar.md/g,
              "/"
            )
            .replace(
              /https:\/\/github.com\/tsirysndr\/top-github-users\/blob\/main\/markdown\/followers\/madagascar.md/g,
              "/followers"
            )
        )
      );
  }, [url]);

  return { markdown };
};
