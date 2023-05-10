import { ComponentPropsWithRef } from 'react';
import classnames from '../../utils/classnames';

enum Variant {
  primary,
  secondary,
}

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: keyof typeof Variant;
}

export function Button({
  className,
  children,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variants = new Map<keyof typeof Variant, string>();
  variants.set('primary', 'border-black bg-black text-white focus:ring-gray-300');
  variants.set('secondary', 'border-black text-black focus:ring-gray-300');

  return (
    <button
      type={type}
      className={classnames(
        'h-10 rounded-md border px-6 font-semibold transition-all focus:outline-none focus:ring ',
        variants.get(variant) as string,
        className as string
      )}
      {...props}
    >
      {children}
    </button>
  );
}
