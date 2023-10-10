import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subTitle1'
    | 'subTitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'large', className, as: Component = 'span', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
