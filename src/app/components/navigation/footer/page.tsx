import { PiBookOpenUserFill } from "react-icons/pi";
import { TbMessagePlus } from "react-icons/tb";


const Logo = () => (
  <header className="flex justify-center items-center">
    <h2>
      <PiBookOpenUserFill
        size="22"
        className="text-[var(--accent-color)] mr-2"
      />
      <span className="text-[1.38rem]">edulearning</span>
    </h2>
    <a href="mailto:edulearning@gmail.com">
      <TbMessagePlus /> <span>edulearning@gmail.com</span>{" "}
    </a>
  </header>
);
export default function page() {
  return (
    <footer className="flex justify-between max-sm:px-2 h-4/6" >
      <Logo />
    </footer>
  )
}
