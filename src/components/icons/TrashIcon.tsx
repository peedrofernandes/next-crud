import { IconProps } from "../../constants/interfaces";

export default function TrashIcon(props: IconProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5,3h14c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H5C4.4,5,4,4.6,4,4v0C4,3.4,4.4,3,5,3z" />
      <path d="M17,5l-3-3h-4L7,5H17z M5,7v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7H5z M9,20L9,20c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h0	c0.6,0,1,0.4,1,1v9C10,19.6,9.6,20,9,20z M15,20L15,20c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v9	C16,19.6,15.6,20,15,20z" />
    </svg>
  )
}