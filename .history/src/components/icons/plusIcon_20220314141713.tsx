import { IconProps } from "../../constants/interfaces";

export default function PlusIcon(props: IconProps) {
  return (
    <svg width={props.width || 24} height={props.height || 24} stroke={props.color || 'black'} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  )
}