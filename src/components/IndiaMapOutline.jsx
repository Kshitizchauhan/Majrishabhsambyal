/*
 * IndiaMapOutline — exact user image as static background (no scroll / no shine).
 * Uses /india-map.webp (copied from user's Downloads) centered inside About box.
 * Light greyish, low opacity + wash overlay so body text stays fully readable.
 */

export default function IndiaMapOutline() {
  return (
    <div
      aria-hidden="true"
      className="india-photo-wrap pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <img
        src="/india-map.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="india-photo-img"
      />
      {/* readability wash so text stays crisp over map lines */}
      <div aria-hidden="true" className="india-photo-wash" />
    </div>
  );
}
