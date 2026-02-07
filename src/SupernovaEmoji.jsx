const emojiMap = {
  rocket: "/emojis/rocket.svg",
  cloud: "/emojis/cloud.svg",
  lock: "/emojis/lock.svg",
  chart: "/emojis/chart.svg",
  tools: "/emojis/tools.svg",
  idea: "/emojis/idea.svg",
  radar: "/emojis/radar.svg",
  headset: "/emojis/headset.svg",
  book: "/emojis/book.svg",
  target: "/emojis/target.svg",
  star: "/emojis/star.svg",
};

export default function SupernovaEmoji({
  name,
  alt = "",
  className = "",
  size = 24,
}) {
  const src = emojiMap[name];
  if (!src) return null;

  const ariaHidden = alt ? undefined : true;

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`emoji-icon ${className}`.trim()}
      aria-hidden={ariaHidden}
      loading="lazy"
    />
  );
}
