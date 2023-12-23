import { component$ } from "@builder.io/qwik";
import spriteHref from "../svg-icons/sprite.svg"

/**
 * @typedef {HTMLAttributes<SVGElement>} SVGAttributes
 * @typedef {import("~/svg-icons/names").IconName} IconName
 */

/**
 * @type {Component<SVGAttributes & {
 * alt: string,
 * } & (
 * { href: IconName, icon?: never } |
 * { icon: IconName, href?: never }
 * )
 * >}
 */
export default component$(({ alt, href, icon, class: className, ...props }) => {
  return (
    <>
      <svg
        class={{
          [String(className)]: !!className,
          icon: !!icon,
          [String(icon)]: !!icon
        }}
        role="presentation"
        {...props}
      >
        <use href={`${spriteHref}#${href || icon}`} />
      </svg>
      <span class="visually-hidden">{alt}</span>
    </>
  )
})

// import spriteHref from "~/app/components/icons/sprite.svg"
// export function Icon({ name, ...props }) {
//   return (
//     <svg {...props}>
//       <use href={`${spriteHref}#${name}`} />
//     </svg>
//   )
// }

export const SvgDefinitions = component$(() => {
  return (
    <svg
      aria-hidden="true"
      style="position: absolute; width: 0; height: 0; overflow: hidden"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <defs dangerouslySetInnerHTML={Object.values(definitions).join('')}></defs> */}
    </svg>
  )
})