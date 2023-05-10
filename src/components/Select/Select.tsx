import { ComponentPropsWithoutRef } from 'react';
import classnames from '../../utils/classnames';

export interface SelectOptions {
  readonly label: string;
  readonly value: string;
}

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label?: string;
  options: SelectOptions[];
  /**
   * className for wrapper
   */
  wrapperClass?: string;
}

export function Select({
  className,
  disabled,
  id,
  label,
  options,
  required,
  wrapperClass,
  ...props
}: SelectProps) {
  return (
    <div className={wrapperClass}>
      {label && (
        <label htmlFor={id} className="mb-1 text-gray-700">
          {label}
        </label>
      )}
      {required && label && <span className="after:ml-1 after:text-red-600 after:content-['*']" />}
      <select
        id={id}
        className={classnames(
          'form-select block w-full cursor-pointer rounded-md border-gray-300 shadow-sm',
          'focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50',
          'disabled:cursor-not-allowed disabled:bg-neutral-200',
          'invalid:border-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-200',
          'peer',
          className as string
        )}
        disabled={disabled}
        required={required}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
