import {FaLinkedin, FaGithub, FaInstagram, FaYoutube} from 'react-icons/fa';

export function Social() {
    return (
        <section className="text-center py-10">
            <div className="flex justify-center items-center gap-6">
                <a
                    href="https://www.linkedin.com/in/jose-vitor-facanha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-blue-600 transition-colors duration-300"
                >
                    <FaLinkedin size={32} />
                </a>
                <a
                    href="https://github.com/Jose-silvaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-black transition-colors duration-300"
                >
                    <FaGithub size={32} />
                </a>
                <a
                    href="https://www.instagram.com/zevitor_ze"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-pink-500 transition-colors duration-300"
                >
                    <FaInstagram size={32} />
                </a>
                <a
                    href="https://www.youtube.com/@ssilvadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-red-600 transition-colors duration-300"
                >
                    <FaYoutube size={32} />
                </a>
            </div>
        </section>
    );
}
