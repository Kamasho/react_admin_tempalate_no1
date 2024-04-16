import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  border-radius: 0.3rem;
  padding: 0
    ${(props) =>
      props.size === "sm"
        ? "1.1rem"
        : props.size === "md"
        ? "1.4rem"
        : props.size === "lg"
        ? "1.6rem"
        : "1.1rem"};
  height: ${(props) =>
    props.size === "sm"
      ? "36px"
      : props.size === "md"
      ? "39px"
      : props.size === "lg"
      ? "42px"
      : "38"};
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border: none;
  background-color: ${(props) =>
    props.variant === "light"
      ? "#f8f9fa"
      : props.variant === "dark"
      ? "#212529"
      : props.variant === "info"
      ? "0dcaf0"
      : props.variant === "warning"
      ? "#ffc107"
      : props.variant === "danger"
      ? "#dc3545"
      : props.variant === "success"
      ? "#198754"
      : props.variant === "primary"
      ? "#0d6efd"
      : props.variant === "secondary"
      ? "#6c757d"
      : "#f8f9fa"};
  color: ${(props) =>
    props.variant === "light"
      ? "#f8f9fa"
      : props.variant === "dark"
      ? "#ffffff"
      : props.variant === "info"
      ? "ffffff"
      : props.variant === "warning"
      ? "#ffffff"
      : props.variant === "danger"
      ? "#ffffff"
      : props.variant === "success"
      ? "#ffffff"
      : props.variant === "primary"
      ? "#ffffff"
      : props.variant === "secondary"
      ? "#ffffff"
      : "#f8f9fa"};
`;

export default function Button({
  type,
  variant,
  className,
  id,
  onClick,
  children,
  size,
  label
}) {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      size={size}
    >
      {label ? label : children}
    </ButtonComponent>
  );
}
