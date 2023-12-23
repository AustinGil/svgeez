import { component$ } from "@builder.io/qwik";
import { Svg } from '../components'

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <Svg icon="no-mercy" alt=""></Svg>
    </>
  );
});
