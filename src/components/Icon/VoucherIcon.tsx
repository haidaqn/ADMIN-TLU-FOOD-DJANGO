import { SvgIcon } from "@mui/material"

export interface VoucherIconProps {
  color?: string
  fontSize?: "small" | "inherit" | "medium" | "large"
}

export function VoucherIcon(props: VoucherIconProps) {
  const { color = "#292D32", fontSize = "medium" } = props
  return (
    <SvgIcon fontSize={fontSize}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 48 48"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M12 16.476a1 1 0 0 0-1 1v2.172a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2.172a1 1 0 0 0-1-1zM12 21.908a1 1 0 0 0-1 1v2.172a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2.172a1 1 0 0 0-1-1zM12 27.34a1 1 0 0 0-1 1v2.172a1 1 0 0 0 1 1 1 1 0 0 0 1-1V28.34a1 1 0 0 0-1-1z"
            fill={color}
          ></path>
          <path
            d="M8.867 5.002a3.019 3.019 0 0 0-2.613 2.045l-1.332 4.021C3.298 11.204 2 12.568 2 14.224v3.979a1 1 0 0 0 .693.951C3.941 19.557 5 21.124 5 23.043c0 1.92-1.059 3.488-2.307 3.89a1 1 0 0 0-.693.952v5.976a3.197 3.197 0 0 0 3.182 3.182h15.787l16.978 5.797c1.568.535 3.283-.341 3.8-1.903l1.296-3.918c1.64-.118 2.957-1.49 2.957-3.158v-5.978a1 1 0 0 0-.693-.951c-1.248-.403-2.307-1.97-2.307-3.89 0-1.919 1.059-3.487 2.307-3.89a1 1 0 0 0 .693-.951v-3.977a3.197 3.197 0 0 0-3.182-3.181H27.035L10.06 5.144c-.393-.137-.822-.12-1.192-.142zm.147 1.984c.13-.009.265.008.4.053l11.524 4.004h-13.9l1.114-3.37a.973.973 0 0 1 .862-.687zm-3.832 6.057H11v.951a1 1 0 1 0 2 0v-.951h29.818c.672 0 1.182.51 1.182 1.181v3.405c-1.847.973-3 3.07-3 5.414 0 2.343 1.154 4.44 3 5.412v5.406c0 .672-.51 1.182-1.182 1.182h-29.82c.005-.345.002-.7.002-1.049a1 1 0 0 0-2 0c-.002.347 0 .706.002 1.049h-5.82c-.673 0-1.182-.51-1.182-1.182v-5.404c1.847-.973 3-3.07 3-5.414s-1.154-4.44-3-5.412v-3.407c0-.672.51-1.181 1.182-1.181zm21.976 24h13.77l-1.08 3.265c-.18.543-.725.82-1.254.64z"
            fill={color}
          ></path>
          <path
            d="M32.762 25.56c1.78 0 3.244 1.463 3.244 3.243s-1.464 3.246-3.244 3.246-3.246-1.466-3.246-3.246 1.466-3.244 3.246-3.244zm0 2c-.7 0-1.246.544-1.246 1.243s.547 1.246 1.246 1.246 1.244-.546 1.244-1.246-.545-1.244-1.244-1.244zM23.24 16.037a3.26 3.26 0 0 1 3.244 3.244c0 1.78-1.464 3.244-3.245 3.244s-3.246-1.464-3.246-3.244a3.26 3.26 0 0 1 3.246-3.244zm0 2c-.7 0-1.247.545-1.247 1.244 0 .7.547 1.244 1.246 1.244.7 0 1.245-.545 1.245-1.244 0-.7-.545-1.244-1.245-1.244zM32.055 18.574l-9.524 9.524a1 1 0 0 0 1.414 1.414l9.524-9.524a1 1 0 0 0 0-1.414c-.409-.363-1.03-.401-1.414 0z"
            fill={color}
          ></path>
        </g>
      </svg>
    </SvgIcon>
  )
}
