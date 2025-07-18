import { elementScrollIntoView } from "seamless-scroll-polyfill";

export function scrollToElement(
  id: string | undefined,
  option: ScrollToOptions | ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "start",
  }
) {
  if (!id) return;

  const element = document.getElementById(id);

  if (element) {
    // element.scrollIntoView(option);

    const offset = 70;
    const yOffset =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  }
}
