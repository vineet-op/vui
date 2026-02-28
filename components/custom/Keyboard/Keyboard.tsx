import CustomButton from './CustomButton'
import { keyboardLayout as defaultLayout } from '@/lib/KeyboardLayout'
import { cn } from '@/lib/utils'

export interface KeyboardKey {
    label?: string
    subLabel?: string
    icon?: React.ReactNode
    wide?: boolean
    space?: boolean
}

export interface KeyboardProps {
    layout?: KeyboardKey[][]
    className?: string
    theme?: 'dark' | 'light'
}

const Keyboard = ({
    layout = defaultLayout,
    className,
    theme = 'dark'
}: KeyboardProps) => {
    const themeClasses = theme === 'dark'
        ? 'bg-neutral-900'
        : 'bg-gray-100'

    return (
        <div className={cn("p-4 rounded-lg shadow-2xl lg:max-w-5xl max-w-2xl mx-auto", themeClasses, className)}>
            {layout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.map((key, keyIndex) => (
                        <CustomButton
                            key={keyIndex}
                            label={key.label}
                            subLabel={key.subLabel}
                            icon={key.icon}
                            wide={key.wide}
                            space={key.space}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard