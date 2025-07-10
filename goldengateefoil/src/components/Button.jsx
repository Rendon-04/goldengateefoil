function Button({ children, variant = "primary", onClick, ...props }) {
  const baseClasses = "button";
  const variantClasses = {
    primary: "button-primary",
    secondary: "button-secondary",
    linkout: "button-linkout",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
