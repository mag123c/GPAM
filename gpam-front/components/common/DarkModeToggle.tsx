import { useTheme } from '@/hooks/useTheme';
import { getThemeClasses } from '@/styles/theme/styleUtils';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const styles = getThemeClasses(theme);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button className={styles.darkModeToggle} onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? '🌞' : '🌙'}
        </button>
    );
};

export default DarkModeToggle;
