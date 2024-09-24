import { Theme } from '@/styles/theme/styleUtils';
import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useTheme = () => {
    const { theme, setTheme } = useNextTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return {
        theme: mounted ? (theme as Theme) : 'light',
        setTheme: (newTheme: Theme) => setTheme(newTheme),
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
    };
};
