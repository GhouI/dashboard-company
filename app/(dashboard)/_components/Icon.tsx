import { LucideIcon } from "lucide-react";

interface IconProps {
    icon: LucideIcon;
    size?: number;
    className?: string;
}

export const Icon = ({
    icon: Icon,
    size = 22,
    className,
}: IconProps) => {
    return (
        <Icon
            size={16}
            className={className}
        />
    )
}