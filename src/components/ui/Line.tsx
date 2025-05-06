'use client'
import { cn } from "@/lib/utils/twMergeCustom";

interface LineProps { 
    className?: string;
}

export default function Line({className}: LineProps) {
    return (
        <div
        className={cn('h-1 bg-neutral-800 w-full', className)}
        />
    );
}