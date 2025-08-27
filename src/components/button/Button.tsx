import { Link } from "@mui/material";

type ButtonProps = {
    text: string
    link?: string
    onNavigate?: (page: string) => void
};

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    if (props.text === "Портфолио" && props.onNavigate) {
      props.onNavigate("portfolio");
    } else if (props.text === "О себе" && props.onNavigate) {
      props.onNavigate("main");
    } else {
      // Для контактов используем якорную ссылку
      const element = document.getElementById("contacts");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        underline={"none"}
        color={"#9a9393"}
        sx={(theme) => ({
          cursor: "pointer",
          ":hover": {
            color: "black",
          },
        })}
      >
        {props.text}
      </Link>
    </>
  );
};
