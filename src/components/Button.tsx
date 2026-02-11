// Button.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // only import if you're using react-router

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' ;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  // ── New link-related props ──
  href?: string;          // external link[](https://...) or internal (#anchor)
  to?: string;            // internal route for react-router-dom <Link>
  target?: '_blank' | '_self'; // mainly for external links
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  icon,
  rightIcon = '', // auto arrow for "Start Switching"
  disabled = false,
  onClick,
  className = '',
  href,
  to,
  target = '_blank',
  ...rest
}) => {


  const variantStyles = {
    primary:   'btn-snuk btn-primary',
    secondary: 'btn-snuk btn-secondary',
    outline:   'btn-snuk btn-ghost',
    danger:    'btn-snuk btn-danger',
  };


  const classes = `
    ${variantStyles[variant]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Decide what to render
  if (to) {
    // Internal route → use react-router Link
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{text}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Link>
    );
  }

  if (href) {
    // External or anchor link → use <a>
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {icon && <span>{icon}</span>}
        <span>{text}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }

  // Normal button
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};