import classNames from 'classnames';
import styles from './background.module.scss';

export interface BackgroundProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Background = ({ className }: BackgroundProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['purple-circle']} />
        </div>
    );
};
