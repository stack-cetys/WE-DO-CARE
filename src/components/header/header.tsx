import classNames from 'classnames';
import styles from './header.module.scss';
import { Button } from '../button/button';
import logo from '../../assets/logo.png';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img className={styles['logo']} src={logo} alt="WE DO & CARE Logo" />
            <div className={styles['nav-link']}>
                <a>Sobre Nosotros</a>
                <a>Talleres</a>
                <a>Contacto</a>
                <Button text="Regístrate" />
            </div>
        </div>
    );
};
