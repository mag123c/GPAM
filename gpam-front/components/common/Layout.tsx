import { useTheme } from '@/hooks/useTheme';
import { getThemeClasses } from '@/styles/theme/styleUtils';
import { ReactNode, useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const styles = getThemeClasses(theme);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className={`${styles.background} min-h-screen`}>
            <div className={`${styles.container} relative`}>
                <div className="absolute top-4 right-4">
                    <DarkModeToggle />
                </div>
                <div className="pt-16">{children}</div>
            </div>
        </div>
    );
};
