import * as Switch from '@radix-ui/react-switch';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeSwitch() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-medium">
                {isDark ? '🌙' : '☀️'}
            </span>

            <Switch.Root
                className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative shadow-inner transition-colors duration-200 data-[state=checked]:bg-purple-500"
                checked={isDark}
                onCheckedChange={toggleTheme}
            >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5" />
            </Switch.Root>

            <span className="text-sm font-medium">
                {isDark ? 'Dark' : 'Light'}
            </span>
        </div>
    );
}
