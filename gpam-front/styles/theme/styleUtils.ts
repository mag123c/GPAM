export type Theme = 'light' | 'dark';

export const getThemeClasses = (theme: Theme) => {
    const isDark = theme === 'dark';

    return {
        background: isDark ? 'bg-gray-900' : 'bg-white',
        text: isDark ? 'text-white' : 'text-gray-900',
        container: `container mx-auto px-4 py-8 max-w-[720px] min-w-[360px] ${isDark ? 'bg-gray-800' : 'bg-white'}`,
        heading1: `text-2xl sm:text-3xl font-bold mb-6 text-center ${isDark ? 'text-gray-100' : 'text-gray-900'}`,
        heading2: `text-xl sm:text-2xl font-semibold mb-4 text-center ${isDark ? 'text-gray-200' : 'text-gray-800'}`,
        heading3: `text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`,
        heading4: `text-base sm:text-lg font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`,
        button: `w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-center`,
        input: `w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDark ? 'bg-gray-700 border-gray-500 text-gray-100' : 'bg-white border-gray-300 text-gray-900'
        }`,
        list: 'space-y-4',
        listItem: `p-4 rounded shadow cursor-pointer hover:shadow-md transition-shadow ${
            isDark ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'
        }`,
        smallText: `text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`,
        card: `p-3 rounded ${isDark ? 'bg-gray-600 text-gray-100' : 'bg-gray-100 text-gray-900'}`,
        backButton: `mb-4 transition-colors ${
            isDark ? 'text-blue-300 hover:text-blue-200' : 'text-blue-500 hover:text-blue-600'
        }`,
        darkModeToggle: `p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
        }`,
    };
};
