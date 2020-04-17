import React, { ReactNode, useEffect, useRef, useState } from 'react'

export interface IScrollAnim {
    classBefore: string;
    classAfter: string;
    className?: string;
    options?: IntersectionObserverInit
    children?: ReactNode;
}

function ScrollAnim({ classBefore, classAfter, options, className, children }: IScrollAnim) {

    const ref = useRef<HTMLDivElement>(null);
    const [classes, setClasses] = useState<Array<string>>([classBefore])

    useEffect(() => {
        const reference = ref.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setClasses([classBefore, classAfter])
                }
            })
        }, options)

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
