import { FaGithub, FaLinkedin} from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { Tooltip } from "@mui/material";

function Footer() {
    const socialLinks = [
        {
            icon: <FaGithub size={28} />,
            name: "GitHub",
            href: "https://github.com/omersalihotaci",
        },
        {
            icon: <FaLinkedin size={28} />,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/%C3%B6mer-salih-otaci-096743387/",
        },

        {
            icon: <IoIosMailUnread size={28} />,
            name: "omersalihotaci@gmail.com",
            href: "mailto:omersalihotaci@gmail.com",
        },
    ];

    return (
        <footer className=" py-6">
            <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start gap-6 sm:gap-10">
                {socialLinks.map((social) => (
                    <Tooltip
                        key={social.name}
                        title={social.name}
                        placement="top"
                    >
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                                "flex items-center gap-2 hover:text-blue-500 transition-colors"
                            }
                        >
                            {social.icon}

                            <span className="">{social.name}</span>
                        </a>
                    </Tooltip>
                ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
                Made with ❤️ by Ömer Salih Otacı. Check out the{" "}
                <a
                    href="https://github.com/omersalihotaci"
                    className="underline hover:text-blue-500"
                >
                    source code
                </a>
                .
            </p>
        </footer>
    );
}

export default Footer;
