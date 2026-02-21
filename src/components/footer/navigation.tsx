import LinkedIn from "@/assets/svg/linkedIn.svg?react";
import Mail from "@/assets/svg/mail.svg?react";
import Notion from "@/assets/svg/notion.svg?react";

const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <a className="cursor-pointer" href={to} target="__blank">
      {children}
    </a>
  );
};

const MailLink = ({
  children,
  to,
  subject,
  body,
}: {
  children: React.ReactNode;
  to: string;
  subject: string;
  body: string;
}) => {
  return (
    <a href={`mailto:${to}?subject=${subject}&body=${body}`}>{children}</a>
  );
};

{
  /* <a href="mailto:email@example.com?subject=This is a subject&body=This is body">Send an email</a> */
}

export const Navigation = () => {
  return (
    <div className="p-8 text-white flex justify-between">
      <p>@2026</p>
      <ul className="flex gap-4">
        <li>
          <Link to="https://www.linkedin.com/in/yannaing24/">
            <LinkedIn />
          </Link>
        </li>
        <li>
          <MailLink
            to="rajapoudel342@gmail.com"
            subject="Testing"
            body="Body testing"
          >
            <Mail />
          </MailLink>
        </li>
        <li>
          <Link to="https://albert24.super.site">
            <Notion />
          </Link>
        </li>
      </ul>
    </div>
  );
};
