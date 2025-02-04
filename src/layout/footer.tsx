import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import "@/styles/components/footer.scss"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__main">
                    <div className="footer__section footer__about">
                        <h3 className="footer__title">Sobre o Infnet Library</h3>
                        <p className="footer__description">
                            Plataforma na qual os estudantes podem facilmente procurar questões passadas dos diversos cursos da Infnet. De forma a ampliar o ensino e o aprendizado. Infnet Library não tem fins comerciais.
                        </p>
                        <p className="footer__description">
                            Ademais, trata-se de um repositório de questões, portanto não há respostas para cada questão. Ficando encarregado ao aluno de exercer suas habilidades e as aprimorar.
                        </p>
                    </div>

                    <div className="footer__section footer__quick-links">
                        <h3 className="footer__title">Links rápidos</h3>
                        <ul className="footer__links">
                            <li><Link href={"/blocos"}>Cursos</Link></li>
                            <li><Link href={"/blocos"}>Exercícios</Link></li>
                            <li><Link href={"/"}>Materiais</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section footer__contact">
                        <h3 className="footer__title">Entre em contato com o Dev</h3>
                        <div className="footer__social">
                            <a
                                href="https://www.linkedin.com/in/marcos-ryan-274266268/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="footer__social-link"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/Phoenix7290"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                className="footer__social-link"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="mailto:marcos.ryanss.br@gmail.com"
                                title="Email"
                                className="footer__social-link"
                            >
                                <FaEnvelope />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__copyright">
                        <p>Developed by Marcos Ryan</p>
                        <p>&copy; {currentYear} Marcos Ryan. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;