import React, { ReactNode, useEffect, useRef, useState } from 'react'

export interface IScrollAnimConfig extends IntersectionObserverInit {
    startRatio?: number;
    reversible?: boolean;
}

export interface IScrollAnim {
    classBefore: string;
    classAfter: string;
    className?: string;
    options?: IScrollAnimConfig
    children?: ReactNode;
}

// ================================ HELPER FUNCTIONS ============================

const generateObserverConfig = ({ reversible, startRatio = 0, ...others }: IScrollAnimConfig): IntersectionObserverInit => {
    const options: IntersectionObserverInit = { ...others }

    // Check if threshold was given
    // To ensure the user isn't directly 
    // targetting intersection observer
    if (!others.threshold) {
        options.threshold = reversible ? [startRatio, 1] : startRatio;
        return options
    }

    return options
}


// ================================ COMPONENT ===================================

function ScrollAnim({
    classBefore,
    classAfter,
    options = { startRatio: 0 },
    className,
    children
}: IScrollAnim) {

    const ref = useRef<HTMLDivElement>(null);

    const [classes, setClasses] = useState<Array<string>>([classBefore])

    useEffect(() => {
        const reference = ref.current;
        const observerOptions = generateObserverConfig(options)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setClasses([classBefore, classAfter])
                }
                else console.log(entry)
            })
        }, observerOptions)

        observer.observe(reference as HTMLDivElement)

        return () => {
            observer.unobserve(reference as HTMLDivElement)
        }

    }, [options, classBefore, classAfter])

    return (
        <div ref={ref} className={className}>
            <div className={classes.join(' ')}>
                {children}
            </div>
        </div>
    )
}

export default ScrollAnim
