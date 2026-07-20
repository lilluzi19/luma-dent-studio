type SectionHeadingProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionHeading({
  icon,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className="section-heading"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="section-heading-badge">
        <i className={`bi ${icon}`} />
        <span>{title}</span>
      </div>

      <p>{children}</p>
    </div>
  );
}